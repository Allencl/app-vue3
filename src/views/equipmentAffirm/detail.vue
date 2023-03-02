<template>
    <span>
        <AppBarPage>
        </AppBarPage>

        <v-row no-gutters style="margin-bottom:8px;">
            <v-col cols="6">
                <v-icon icon="mdi-tools" size="16" color="#3F51B5"></v-icon>
                <span style="padding-left:6px;">设备维修信息</span>
            </v-col>
            <v-col cols="6" class="text-right" style="padding-right:6px">
                <span class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ bufferRow.equipmentName }}</span>
            </v-col>
        </v-row>

        <v-sheet elevation="2" rounded class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-bullhorn" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">维修信息</span>
                </v-col>
                <!-- <v-col cols="6">
                    <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ 111 }}</p>
                </v-col> -->
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">故障类型:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.faultTypeCn }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">故障位置:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.faultStationCn }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">故障详情描述:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.problemDesc }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">维修类型:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.reportType }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">报修人:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.reportBy }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">报修时间:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.reportTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">响应人:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.responseBy }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">响应时间:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.responseTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">维修人:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.maintainRepairBy }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">维修时间:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.productRepairTime }}</p>
                </v-col>
            </v-row>

        </v-sheet>
        <div style="height:6px;"></div>
        <v-sheet elevation="2" rounded class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-pencil-outline" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">评价</span>
                </v-col>
                <!-- <v-col cols="6">
                    <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ 111 }}</p>
                </v-col> -->
            </v-row>


            <v-radio-group
                v-model="radio"
                row
            >
                <v-row no-gutters>
                    <v-col cols="4">
                        <v-radio
                            label="好评"
                            value="1"
                            color="primary"
                        >
                            <template v-slot:label>
                                <div style="position:relative;top:3px">
                                    <span class="primary--text">好评</span>
                                    <v-icon style="position:relative;top:-3px;margin-left:2px;" color="primary" icon="mdi-emoticon"></v-icon>
                                </div>
                            </template>
                        </v-radio>
                    </v-col>
                    <v-col cols="4">
                        <v-radio
                            value="2"
                            color="warning"
                        >
                            <template v-slot:label>
                                <div style="position:relative;top:3px">
                                    <span class="primary--text">中评</span>
                                    <v-icon style="position:relative;top:-3px;margin-left:2px;" color="warning" icon="mdi-emoticon"></v-icon>
                                </div>
                            </template>
                        </v-radio>
                    </v-col>
                    <v-col cols="4">
                        <v-radio
                            label="差评"
                            value="3"
                            color="error"
                        >
                            <template v-slot:label>
                                <div style="position:relative;top:3px">
                                    <span class="primary--text">差评</span>
                                    <v-icon style="position:relative;top:-3px;margin-left:2px;" color="error" icon="mdi-emoticon"></v-icon>
                                </div>
                            </template>
                        </v-radio>
                    </v-col>
                </v-row>
            </v-radio-group>

            <div>
                <v-icon @click="cameraHandle" color="primary" size="42">mdi-camera-wireless</v-icon>
            </div>

            <div style="padding-left:12px">
                <p>对维修工的评价</p>
                <v-row no-gutters class="text" style="margin-top:8px;">
                    <v-col cols="4">
                        <p>技术水平</p>
                    </v-col>
                    <v-col cols="8">
                        <van-rate v-model="value1" color="#ffd21e"/>     
                    </v-col>
                </v-row>
                <v-row no-gutters class="text" style="margin-top:4px;">
                    <v-col cols="4">
                        <p>维修效率</p>
                    </v-col>
                    <v-col cols="8">
                        <van-rate v-model="value2" color="#ffd21e" />     
                    </v-col>
                </v-row>
                <v-row no-gutters class="text" style="margin-top:4px;">
                    <v-col cols="4">
                        <p>维修经验</p>
                    </v-col>
                    <v-col cols="8">
                        <van-rate v-model="value3" color="#ffd21e" />     
                    </v-col>
                </v-row>
                <v-row no-gutters class="text" style="margin-top:4px;">
                    <v-col cols="4">
                        <p>维修执行力</p>
                    </v-col>
                    <v-col cols="8">
                        <van-rate v-model="value4" color="#ffd21e" />     
                    </v-col>
                </v-row>
                <v-row no-gutters class="text" style="margin-top:2px;">
                    <v-col cols="4">
                        <p>其他</p>
                    </v-col>
                    <v-col cols="8">
                        <van-rate v-model="value5" color="#ffd21e" />     
                    </v-col>
                </v-row>
            </div>



                
        </v-sheet>


        <v-row no-gutters>
            <v-col cols="12">
                <v-btn
                    variant="outlined"
                    color="primary"
                    block
                    @click="onSubmit"
                >
                    发布
                </v-btn>
            </v-col>
        </v-row>
        <div style="height: 80px;"></div>
    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import SelectComponents from '@/packages/Select.vue'


    import { showSuccessToast,showFailToast } from 'vant'
    import {RepairmanHTTP} from '@/http/equipment/repairs'   // api
    import {AffirmHTTP,CancelHTTP} from '@/http/equipment/maintain'   // api


    import moment from "moment"

  export default {
    components:{
        AppBarPage,
        SelectComponents
    },
    data: () => ({
        bufferRow:{},  // 行数据

        radio:null,   // 好评
        value1:"",   // 星星
        value2:"",   // 星星
        value3:"",   // 星星
        value4:"",   // 星星
        value5:"",   // 星星

    }),
    created(){
        this.initFunc()

    },
    methods: {
        // 初始化
        initFunc(){
            const {row}=this.$route.query
            
            this.bufferRow=JSON.parse(row)
            this.time=moment(new Date()).format('YYYY-MM-DD HH:mm')
        },
        // 拍照
        cameraHandle(){
            showSuccessToast("建设中")
        },
        // 确认维修
        async onSubmit(){
            const {bufferRow,checked,checked2,user}=this
            const _json={
                tmBasEquipmentId: bufferRow.tmBasEquipmentId,  // 当前数据的tmBasEquipmentId字段值,
                isRepair:checked, // 当前数据的isRepair字段值 ,
                isScrap:checked2, // 当前数据的isScrap字段值,
                helpers: user,
            }

            // console.log( user )
            // return
            
            const {code}=await AffirmHTTP({
                payload:_json
            })

            if(code==200){
                showSuccessToast('操作成功！')
                this.$router.push({
                    path:'/equipment/maintain', 
                    query:{ }
                }) 
            }
            
        },

    },
  }
</script>