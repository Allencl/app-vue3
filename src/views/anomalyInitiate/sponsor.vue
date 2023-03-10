<template>
    <span>
        <AppBarPage>
        </AppBarPage>


        <v-sheet elevation="2" rounded class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-bullhorn" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">通用信息</span>
                </v-col>
                <v-col cols="6">
                    <!-- <p @click="checkExpress" class="font-weight-medium text-right text-teal-lighten-1" color="primary">查看维修经验</p> -->
                </v-col>
            </v-row>




            <SelectComponents 
                v-model:value="property"
                label="异常类型属性"
                required
                :option="selectPropertyOption"
            />

            <SelectComponents 
                v-model:value="type"
                ref="select2"
                label="异常类型"
                :option="typeSelectOption"
                required
            />

            <SelectComponents 
                v-model:value="content"
                ref="select3"
                label="异常内容"
                :option="contentSelectOption"
                required
            />
   

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


            <SelectComponents 
                v-model:value="urgency"
                ref="select4"
                label="紧急程度"
                :option="urgencySelectOption"
                required
            />

            <van-field v-model="place" label="地点" type="textarea" />

            <van-field v-model="serialNumber" label="产品序列号" />


        </v-sheet>
        <div style="height:6px;"></div>

        <v-sheet elevation="2" rounded class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-bullhorn" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">其他信息</span>
                </v-col>
                <v-col cols="6">
                    <!-- <p @click="checkExpress" class="font-weight-medium text-right text-teal-lighten-1" color="primary">查看维修经验</p> -->
                </v-col>
            </v-row>

            <SelectComponents 
                v-model:value="equipment"
                ref="select7"
                label="设备信息"
                :option="equipmentSelectOption"
                
            />


            <SelectComponents 
                v-model:value="product"
                ref="select7"
                label="产品信息"
                :option="productSelectOption"
                
            />

        </v-sheet>
        <div style="height:6px;"></div>
        
        <v-sheet elevation="2" rounded class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-bullhorn" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">异常信息</span>
                </v-col>
                <v-col cols="6">
                    <!-- <p @click="checkExpress" class="font-weight-medium text-right text-teal-lighten-1" color="primary">查看维修经验</p> -->
                </v-col>
            </v-row>
 
            <van-field v-model="abnormalDescription" type="textarea" label="异常描述" required />
            <van-field v-model="remark" type="textarea" label="备注" />


            <div style="padding: 0px 16px 0px 16px;">
                <p style="margin-bottom:12px;">图片选择</p>
                <van-uploader 
                    v-model="fileList"
                    :after-read="afterRead" 
                    :preview-image="false"
                />
                <div class="custem-iamge-upload">
                    <li v-for="(o,i) in bufferFileList" :key="i">
                        <img :src="o.url" />
                        <v-icon @click="removeClick(o)" class="icon" icon="mdi-close-circle-outline" color="red"></v-icon>
                    </li>
                </div>

            </div>


        </v-sheet>



        <v-row no-gutters>

            <v-col cols="12" class="text-center">
                <v-btn @click="submitHandle" color="primary" block>
                    确认发起
                </v-btn>
            </v-col>
        </v-row>
        <div style="height:36px;"></div>


    </span>
</template>
<script>

    import AppBarPage from '@/components/AppBar.vue'  // 异常处理 异常发起
    import {httpHandle} from '@/http/http'  // api
    import {FactoryTreeHTTP} from '@/http/equipment/repairs'   // api
    import {FormatTree} from '@/utils/data'   // utils
    import SelectComponents from '@/packages/Select.vue'

    import { showSuccessToast,showFailToast } from 'vant'

    import moment from "moment"

  export default {
    components:{
        AppBarPage,
        SelectComponents
    },
    data: () => ({
        bufferRow:{},  // 行数据


        fileList:[
            // { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
        ],  // 图片
        bufferFileList:[],  // 缓存图片

        property:"",  // 异常类型属性
        selectPropertyOption:[],  // 异常类型属性 数据

        type:"",   // 异常类型
        typeSelectOption:[],   // 异常类型数据

        content:"",  // 异常内容
        contentSelectOption:[],   // 异常内容 数据


        show:false,   // 工厂 show
        fieldValue:"",  // 工厂显示值
        options:[],    // 工厂 数据
        factoryID:"",   // 工厂选中ID

        urgency:"",  // 紧急
        urgencySelectOption:[],   // 紧急 数据

        place:"",    // 地点
        serialNumber:"SN2022030140001",   // 产品数列号


        equipment:"",   // 设备信息
        equipmentSelectOption:[],   // 设备信息 数据


        product:"",   // 产品信息
        productSelectOption:[],   // 产品信息 数据

        abnormalDescription:"",   // 异常描述
        remark:"",    // 备注

    }),
    created(){
        this.initFunc()
        this.getTypeHttp()  // 异常类型

        this.getContentHttp()  // 异常内容
        this.FactoryHTTP()   //  工厂数据
        this.getEquipmentHttp()  // 设备信息
        this.productHTTP()   // 产品信息
    },
    methods: {
        // 初始化
        initFunc(){
            const _bufferDictionaries=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}")

            // 异常类型属性
            const _selectAttribute=_bufferDictionaries["abnormal_type"]||[]    // 属性
            this.selectPropertyOption=_selectAttribute.map(o=>Object.assign({text:o.lable,value:o.value}))   // 属性数据


            // 紧急程度
            const _selectUrgent=_bufferDictionaries["urgent_degree"]||[]     
            this.urgencySelectOption=_selectUrgent.map(o=>Object.assign({text:o.lable,value:o.value}))  

            
            console.log( _bufferDictionaries )

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
        // 异常 内容
        async getContentHttp(){

            // 展示  abnormalNo + abnormalName   
            // 取值  tmBasAbnormalTypeId
            const {code,rows=[]}= await httpHandle({
                url:'/stage-api/iiot/abnormalContent/listAbnormalContentForSelect',
                method:"get",
                url_params:{
                    // ttQmAbnormalId:ttQmAbnormalId
                    abnormalNo:""
                }

            }) 

            if(code==200){
                this.contentSelectOption=rows.map(o=>Object.assign({
                    text:o.contentNo+o.contentName,
                    value:o.tmBasAbnormalContentId
                }))  
            }
        }, 
        async FactoryHTTP(){
            // 工厂节点数据
            const {data=[]} = await FactoryTreeHTTP()
            const _tree=FormatTree(data,"tmBasNodeLevelId", "parentId")
            this.options=_tree
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
        // 设备信息
        async getEquipmentHttp(){
            // 展示  equipmentNo +  equipmentName  值  tmBasEquipmentId
            const {code,rows=[]}= await httpHandle({
                url:'/stage-api/iiot/equipment/llistEquipmentForSelect',
                method:"get",
                url_params:{
                    equipmentNo:""
                }

            }) 

            if(code==200){
                this.equipmentSelectOption=rows.map(o=>Object.assign({
                    text:o.equipmentNo+o.equipmentName,
                    value:o.tmBasEquipmentId
                }))  
            }
        }, 
        // 产品信息
        async productHTTP(){
            // 展示  matnr + maktxC   值  tmBasPartId
            const {code,rows=[]}= await httpHandle({
                url:'/stage-api/iiot/part/listPartForSelect',
                method:"get",
                url_params:{
                    // pageNum:1,
                    // pageSize:10,          
                    noOrName:""
                }

            }) 

            if(code==200){
                this.productSelectOption=rows.map(o=>Object.assign({
                    text:o.matnr+o.maktxC,
                    value:o.tmBasPartId
                })).splice(0,30)
            }
        }, 
        // 提交
        async submitHandle(){
   

            const _json={
                a: this.property,    // 异常类型属性
                b: this.type,    // 异常类型
                c: this.content,  // 异常内容
                d: this.fieldValue,  // 工厂节点
                e: this.urgency,   // 紧急程度
                f: this.place,   // 地点
                g: this.serialNumber,  // 产品序列号
                h: this.equipment,    // 设备信息
                j: this.product,   // 产品信息
                tt: this.abnormalDescription,   // 异常描述
                gfg: this.remark,    // 备注
            }

            console.log( _json )
        },
        // 图片上传
        async afterRead (file){
           
            // console.log(file.file)
            if( !file.file.type.includes("image") ){
                showFailToast("只能选择图片！")
                return
            }

            // 图片 上限
            if( this.bufferFileList.length>2 ){
                showFailToast("最多只能选择3张图片！")
                return
            }



            let _formData= new FormData()
            _formData.append("file",file.file)

            // console.log(_formData)
            const {code,data={}}= await httpHandle({
                url:'/stage-api/file/upload',
                method: "post",
                formData:true,
                payload:_formData
            })
            
            if(code==200){
                this.bufferFileList= this.bufferFileList.concat([data] )
      

                // console.log(this.bufferFileList)
            }

 
        },
        // 删除图片
        removeClick(option){
            this.bufferFileList=JSON.parse(JSON.stringify(this.bufferFileList)).filter(o=>o.url!=option.url)
        }   
    },
  }
</script>