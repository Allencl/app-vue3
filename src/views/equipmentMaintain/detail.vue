<template>
    <span>
        <AppBarPage>
        </AppBarPage>

        <v-row no-gutters style="margin-bottom:8px;">
            <v-col cols="6">
                <v-icon icon="mdi-tools" size="16" color="#3F51B5"></v-icon>
                <span style="padding-left:6px;">设备维修信息</span>
            </v-col>
            <v-col cols="6" class="text-right">
                <span class="font-weight-medium text-right text-teal-lighten-1" color="primary">PT01001-1线旋切机1</span>
            </v-col>
        </v-row>

        <v-card class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-bullhorn" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">报修信息</span>
                </v-col>
                <v-col cols="6">
                    <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ 111 }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">故障类型:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">111111</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">故障位置:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">111111</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">故障详情描述:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">111111</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">维修类型:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">111111</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">报修人:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">111111</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">报修时间:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">111111</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">响应人:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">111111</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">响应时间:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">111111</p>
                </v-col>
            </v-row>


        </v-card>

        <v-btn @click="cancelReimbursement" block color="error" variant="outlined">
            取消报销
        </v-btn>

        <v-card class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-check-bold" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">维修确认</span>
                </v-col>
                <v-col cols="6">
                    <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">查看维修经验</p>
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
                label="报修人"
                required
                :option="repairmanSelectOption"
            />
   
            <van-field v-model="time" label="确认时间" readonly />




        </v-card>
    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import SelectComponents from '@/packages/Select.vue'


    import { showSuccessToast,showFailToast } from 'vant'
    import {RepairmanHTTP} from '@/http/equipment/repairs'   // api



  export default {
    components:{
        AppBarPage,
        SelectComponents
    },
    data: () => ({
        checked:false,  // 是否外修
        checked2:false,  // 是否报废

        value:"111",   // 维修人
        user:"",     // 协助人
        time:"2022-12-11",   // 时间

        // 协助人 数据
        repairmanSelectOption:[

        ],
    }),
    created(){

        this.initRepairman()
    },
    methods: {
        // 取消报销
        async cancelReimbursement(){
            console.log("取消报销")
        },
        // 确认维修
        async onSubmit(){

        },
        // 报修人
        async initRepairman(){
            const {rows=[]}=await RepairmanHTTP()
            this.repairmanSelectOption=rows.map(o=> Object.assign({text:`${o.userName}-${o.nickName}`,value:o.userId}))
        },

    },
  }
</script>