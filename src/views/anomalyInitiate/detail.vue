<template>
    <span>
        <AppBarPage>
        </AppBarPage>



        <v-sheet elevation="2" rounded class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-bullhorn" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">异常发起信息流水</span>
                </v-col>
                <v-col cols="6">
                    <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ bufferRow.abnormalNo }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">异常类型属性:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.abnormalType }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">紧急程度:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.urgentDegree }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">异常类型:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.tmBasAbnormalTypeId }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">异常内容:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.tmBasAbnormalContentId }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">异常描述:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.abnormalStateName }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">产品序列号:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.ttPpOrderSnId }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">产品名称:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.partName }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">异常地点:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.abnormalPlace }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">设备型号:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.tmBasEquipmentId }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">发起人:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.initiateBy }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">发起时间:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.initiateTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">发起联系方式:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.initiatePhone }}</p>
                </v-col>
            </v-row>
        </v-sheet>
        <div style="height:6px;"></div>
        <v-sheet elevation="2" rounded class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-bullhorn" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">异常转发信息</span>
                </v-col>
                <v-col cols="6">
                    <!-- <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ "YC202302140001" }}</p> -->
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">转发说明:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.productRepairTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">转发到:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.productRepairTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">转发时间:</p>
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
                    <v-icon icon="mdi-bullhorn" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">异常指派信息</span>
                </v-col>
                <v-col cols="6">
                    <!-- <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ "YC202302140001" }}</p> -->
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">指派说明:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.productRepairTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">指派到:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.productRepairTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">指派时间:</p>
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
                    <v-icon icon="mdi-bullhorn" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">异常处理信息</span>
                </v-col>
                <v-col cols="6">
                    <!-- <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ "YC202302140001" }}</p> -->
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">处理描述:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.productRepairTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">处理措施:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.productRepairTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">异常原因:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.productRepairTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">异常影响时长:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.productRepairTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">异常处理人:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.productRepairTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">处理时间:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.productRepairTime }}</p>
                </v-col>
            </v-row>
        </v-sheet>
        <div style="height:6px;"></div>

    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue' // 异常处理 详情
    import {httpHandle} from '@/http/http'  // api

    import { showSuccessToast,showFailToast } from 'vant'

    import moment from "moment"

  export default {
    components:{
        AppBarPage,
        
    },
    data: () => ({
        bufferRow:{},  // 行数据


    }),
    created(){
        this.initFunc()

    },
    methods: {
        // 初始化
        async initFunc(){
            const {ttQmAbnormalId}=this.$route.query

            // 

            const {code,data={}}= await httpHandle({
                url:'/stage-api/iiot/abnormal',
                method:"get",
                url_RESTful:`/${ttQmAbnormalId}`   
            })

            if(code==200){
                this.bufferRow=data
            }


        },

    },
  }
</script>