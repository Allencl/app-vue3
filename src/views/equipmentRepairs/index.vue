<template>
    <span>
        <AppBarPage>
        </AppBarPage>


        <ScanBarComponents 
            ref="scanBar"
            placeholder="扫描或输入设备编号"
            @searchClick="barSearchClick"
        />

        <v-sheet elevation="2" rounded class="pa-1">
            <van-field
                v-model="fieldValue"
                is-link
                readonly
                label="工厂节点"
                placeholder="请选择工厂节点"
                type="textarea"
                required
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

            <!-- <v-card  class="mt-2 mb-4">
                <v-btn  color="primary">
                    确定
                </v-btn>
            </v-card> -->
            <!-- <div class="mt-6 mb-4 pl-2 pr-2">
                <v-btn @click="submit" block color="primary" variant="outlined">
                    确定
                </v-btn>
            </div> -->

        </v-sheet>

        <div style="height:18px"></div>

        <v-sheet elevation="2" rounded class="pa-1">
            <van-field
                v-model="fieldValue2"
                is-link
                readonly
                label="设备"
                placeholder="请选择设备"
                type="textarea"
                required
                @click="show2 = true"
            />
            <van-popup v-model:show="show2" round position="bottom">
                <van-cascader
                    title="请选择设备"
                    :options="options2"
                    active-color="#4CAF50"
                    :field-names="{text:'equipmentName',value:'tmBasEquipmentId',children:'children'}"
                    @close="show2 = false"
                    @finish="onFinishEquipment"
                />
            </van-popup>

            <!-- <v-card  class="mt-2 mb-4">
                <v-btn  color="primary">
                    确定
                </v-btn>
            </v-card> -->
            <div class="mt-6 mb-4 pl-2 pr-2">
                <v-btn @click="submit" block color="primary" variant="outlined">
                    确定
                </v-btn>
            </div>

        </v-sheet>

    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import ScanBarComponents from '@/packages/ScanBar.vue'

    import { showSuccessToast,showFailToast } from 'vant'

    
    import {FactoryTreeHTTP,EquipmentTreeHTTP} from '@/http/equipment/repairs'   // api
    import {FormatTree} from '@/utils/data'   // utils


  export default {
    components:{
        AppBarPage,
        ScanBarComponents
    },
    data: () => ({
        show:false,   // 工厂 show
        fieldValue:"",  // 工厂显示值
        options:[],    // 工厂 数据


        show2:false,   // 设备 show
        fieldValue2:"",  // 设备 显示值
        equipmentSelectValue:{},  // 设备
        options2:[],    // 设备  数据
    }),
    created(){
        this.initFunc()
        this.initEquipmentFunc() 

    },
    methods: {
        // 初始化 工厂
        async initFunc(){
            const {data=[]} = await FactoryTreeHTTP()
            const _tree=FormatTree(data,"tmBasNodeLevelId", "parentId")

            // console.log(_tree)
            this.options=_tree
        },
        // 初始化 设备
        async initEquipmentFunc(){
            const {data=[]} = await EquipmentTreeHTTP()
            const _tree=FormatTree(data,"tmBasEquipmentId", "parentId")

            this.options2=[{tmBasEquipmentId: 0, equipmentName: '顶级节点', children: _tree}]
        },
        // 头部 查询
        barSearchClick(value){
            console.log(value)

            // this.$refs.scanBar.showLoading(true)

            // setTimeout(()=>{
            //     this.$refs.scanBar.showLoading(!true)
            // },2000)
        },
        // 工厂 完成
        onFinish ({ selectedOptions }){
            this.show = false;
            // console.log(selectedOptions)
            this.fieldValue = selectedOptions.map((o) => o.nodeLevelName).join('/')
        },
        // 设备 完成
        onFinishEquipment({ selectedOptions }){
            this.show2 = false
            if(!selectedOptions.length) return
            this.equipmentSelectValue=selectedOptions[selectedOptions.length-1]
            this.fieldValue2 = selectedOptions.map((o) => o.equipmentName).join('/')
        },
        // // 工厂 确定
        // submit(){
        //     // this.$router.push("/equipment/repairs");
        // },
        // 设备 确定
        submit(){
            const {equipmentSelectValue}=this;
            if(!equipmentSelectValue.tmBasEquipmentId){
                showFailToast("未选择设备！");
                return
            }

            this.$router.push({path: '/equipment/repairs', query: {tmBasEquipmentId: equipmentSelectValue.tmBasEquipmentId}});
        }
    },
  }
</script>