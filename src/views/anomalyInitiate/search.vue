<template>
    <span>

        <v-navigation-drawer
            v-model="drawer"
            location="left"
            style="padding: 18px 0px;"
            width="100%"
        >
            <div style="margin-bottom:8px;">
                <v-row no-gutters>
                    <v-col cols="6">
                     
                    </v-col>
                    <v-col cols="6" style="text-align: right;">
                        <v-btn @click="searchClick" color="primary mt-1" density="compact"  variant="plain">查询</v-btn>
                    </v-col>
                </v-row>
            </div>

            <van-field
                v-model="fieldValue"
                is-link
                readonly
                label="工厂节点"
                placeholder="请选择工厂节点"
                type="textarea"
                @click="show = true"
            />
            <van-popup v-model:show="show" round position="bottom">
                <van-cascader
                    title="请选择工厂节点"
                    :options="options"
                    active-color="#4CAF50"
                    :field-names="{text:'nodeLevelName',value:'tmBasNodeLevelId',children:'children'}"
                    @close="show = false"
                    @finish="onFinish"
                />
            </van-popup>

            <SelectComponents 
                v-model:value="type"
                ref="select1"
                label="异常类型"
                :option="typeSelectOption"

            />
            <SelectComponents 
                v-model:value="property"
                ref="select2"
                label="属性"
                :option="propertySelectOption"

            />
            <SelectComponents 
                v-model:value="status"
                ref="select3"
                label="状态"
                :option="statusSelectOption"

            />
        </v-navigation-drawer>


    </span>
</template>
<script>
    import SelectComponents from '@/packages/Select.vue'


    import {FactoryTreeHTTP} from '@/http/equipment/repairs'   // api
    import {FormatTree} from '@/utils/data'   // utils
    import {RepairmanHTTP} from '@/http/equipment/repairs'   // api

  export default {
    components:{
        SelectComponents
    },
    data: () => ({
        drawer: false,

        show:false,   // 工厂 show
        fieldValue:"",  // 工厂显示值
        options:[],    // 工厂 数据


        type:"",   // 异常类型
        typeSelectOption:[],   // 异常类型数据

        property:"",   // 属性 
        propertySelectOption:[],   // 属性数据

        status:"",  // 状态
        statusSelectOption:[],   // 状态数据
    }),
    created(){
        this.initFunc()
        this.initRepairman()

    },
    methods: {
        // 初始化 下拉框
        async initFunc(){
            // 数据字典
            // const _bufferDictionaries=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}")
            // console.log(_bufferDictionaries)

            // 工厂节点数据
            const {data=[]} = await FactoryTreeHTTP()
            const _tree=FormatTree(data,"tmBasNodeLevelId", "parentId")
            this.options=_tree
        },
        // 工厂 完成
        onFinish ({ selectedOptions }){
            this.show = false;
            // console.log(selectedOptions)
            this.fieldValue = selectedOptions.map((o) => o.nodeLevelName).join('/')
        },
        // 异常类型
        async initRepairman(){
            const {rows=[]}=await RepairmanHTTP()
            this.typeSelectOption=rows.map(o=> Object.assign({text:`${o.userName}-${o.nickName}`,value:o.userName}))
        
        },
        // 查询
        searchClick(){
            this.drawer=false
        },
        showDrawer(){
            this.drawer=true
        }
    },
  }
</script>