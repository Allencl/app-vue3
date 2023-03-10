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
    import {httpHandle} from '@/http/http'  // api


    import {FactoryTreeHTTP} from '@/http/equipment/repairs'   // api
    import {FormatTree} from '@/utils/data'   // utils
    import {RepairmanHTTP} from '@/http/equipment/repairs'   // api

  export default {
    components:{
        SelectComponents
    },
    emits: ["searchHandle"],
    data: () => ({
        drawer: false,

        show:false,   // 工厂 show
        fieldValue:"",  // 工厂显示值
        options:[],    // 工厂 数据

        factoryID:"",   // 工厂选中ID

        type:"",   // 异常类型
        typeSelectOption:[],   // 异常类型数据

        property:"",   // 属性 
        propertySelectOption:[],   // 属性数据

        status:"",  // 状态
        statusSelectOption:[],   // 状态数据
    }),
    created(){
        this.initFunc()
        // this.initRepairman()
        this.getTypeHttp()
    },
    methods: {
        // 初始化 下拉框
        async initFunc(){
            // 数据字典
            // 属性   abnormal_type
            // 状态     abnormal_state
            // 紧急程度   urgent_degree

            const _bufferDictionaries=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}")


            const _selectAttribute=_bufferDictionaries["abnormal_type"]||[]    // 属性
            const _selectStatus=_bufferDictionaries["abnormal_state"]||[]     // 状态
            // const _selectUrgentDegree=_bufferDictionaries["urgent_degree"]||[]     // 紧急程度

            this.propertySelectOption=_selectAttribute.map(o=>Object.assign({text:o.lable,value:o.value}))   // 属性数据
            this.statusSelectOption=_selectStatus.map(o=>Object.assign({text:o.lable,value:o.value}))   // 状态数据
      


            // 工厂节点数据
            const {data=[]} = await FactoryTreeHTTP()
            const _tree=FormatTree(data,"tmBasNodeLevelId", "parentId")
            this.options=_tree
        },
        // 异常类型
        async getTypeHttp(){

            // 展示  abnormalNo + abnormalName   
            // 取值  tmBasAbnormalTypeId
            const {code,rows=[]}= await httpHandle({
                url:'/stage-api/iiot/abnormalType/listAbnormalTypeForSelect',
                method:"get",
                url_params:{
                    // ttQmAbnormalId:ttQmAbnormalId
                    abnormalNo:""
                }
    
            }) 

            if(code==200){
                this.typeSelectOption=rows.map(o=>Object.assign({
                    text:o.abnormalNo+o.abnormalName,
                    value:o.tmBasAbnormalTypeId
                }))  
            }
        },    
        // 工厂 完成
        onFinish ({ selectedOptions }){
            this.show = false;

            if(!selectedOptions.length) return

            // tmBasNodeLevelId:“465621691089092608
            let _tmBasNodeLevelId= (selectedOptions[ selectedOptions.length-1 ]||{})["tmBasNodeLevelId"]
            
            this.factoryID=_tmBasNodeLevelId
            this.fieldValue = selectedOptions.map((o) => o.nodeLevelName).join('/')
        },
        // 异常类型
        async initRepairman(){
            // const {rows=[]}=await RepairmanHTTP()
            // this.typeSelectOption=rows.map(o=> Object.assign({text:`${o.userName}-${o.nickName}`,value:o.userName}))
        },
        // 查询
        searchClick(){
            const {factoryID,type,property,status}=this;

            const _json={
                tmBasNodeLevelId:factoryID,  // 工厂
                tmBasAbnormalTypeId:type,       // 异常类型
                abnormalType:property,    // 属性
                abnormalState:status,     // 状态

            }

            this.$emit("searchHandle",_json)
            this.drawer=false

        },
        showDrawer(){
            this.drawer=true
        }
    },
  }
</script>