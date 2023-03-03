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
                    <span class="font-weight-medium">报修信息</span>
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


        </v-sheet>
       
        <v-btn style="margin-bottom:8px;" @click="cancelReimbursement" block color="error" variant="outlined">
            取消报销
        </v-btn>

        <v-sheet elevation="2" rounded class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-check-bold" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">维修确认</span>
                </v-col>
                <v-col cols="6">
                    <p @click="checkExpress" class="font-weight-medium text-right text-teal-lighten-1" color="primary">查看维修经验</p>
                </v-col>
            </v-row>


            <van-field name="switch" label="是否外修">
                <template #input>
                    <van-switch v-model="checked" />
                </template>
            </van-field>

            <van-field name="switch" label="是否报废">
                <template #input>
                    <van-switch v-model="checked2" />
                </template>
            </van-field>

            <van-field v-model="value" label="维修人" readonly />

            <SelectComponents 
                v-model:value="user"
                label="协助人"
                multiple
                :option="repairmanSelectOption"
                @on-change="repairmanChange"
            />
   
            <van-field v-model="time" label="确认时间" readonly />

        </v-sheet>

        <v-row no-gutters>
            <v-col cols="5">
                <v-btn
                    variant="outlined"
                    color="primary"
                    @click="onSubmit"
                >
                    确认维修
                </v-btn>
            </v-col>
            <v-col cols="2">
                
            </v-col>
            <v-col cols="5" class="text-right">
                <v-btn
                    variant="outlined"
                    color="secondary"
                    @click="editExperience"
                >
                    维修经验填写
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

        checked:false,  // 是否外修
        checked2:false,  // 是否报废

        value:"111",   // 维修人
        user:"",     // 协助人
        time:"",   // 时间

        // 协助人 数据
        repairmanSelectOption:[

        ],
    }),
    created(){
        this.initFunc()
        this.initRepairman()
    },
    methods: {
        // 初始化
        initFunc(){
            const {row}=this.$route.query
            
            this.bufferRow=JSON.parse(row)
            this.time=moment(new Date()).format('YYYY-MM-DD HH:mm')
        },
        // 查看维修经验
        checkExpress(){
            this.$router.push({
                path:'/equipment/maintain/experience', 
                query:{ }
            }) 
        },
        // 取消报销
        async cancelReimbursement(){
            const {bufferRow}=this

            const {code}=await CancelHTTP({
                payload:{
                    tmBasEquipmentId: bufferRow.tmBasEquipmentId //当前数据的tmBasEquipmentId字段值
                }
            })

            if(code==200){
                showSuccessToast('操作成功！')
                
                this.$router.push({
                    path:'/equipment/maintain', 
                    query:{ }
                }) 
            }

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
        // 报修人
        async initRepairman(){
            const {rows=[]}=await RepairmanHTTP()
            this.repairmanSelectOption=rows.map(o=> Object.assign({text:`${o.userName}-${o.nickName}`,value:o.userId}))
        },
        // 维修经验填写
        editExperience(){
            const {bufferRow}=this
            // console.log( bufferRow )

            // return
            this.$router.push({
                path:'/equipment/maintain/experienceEdit', 
                query:{ teAdRepairId: bufferRow.teAdRepairId }
            }) 
        },
        // 协助人
        repairmanChange(list){
            console.log(list)
        }
    },
  }
</script>