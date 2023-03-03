<template>
    <span>
        <AppBarPage>
      

        </AppBarPage>

        <v-sheet elevation="2" rounded class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-bullhorn" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">维修设备信息</span>
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
                    <p class="text-truncate font-weight-light">{{ bufferRow.productRepairBy }}</p>
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

        <v-sheet elevation="2" rounded class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-tag-text" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">维修经验</span>
                </v-col>
                <v-col cols="6">
                    <p @click="checkFile" class="font-weight-medium text-right text-teal-lighten-1" color="primary">查看维修文件</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">根本问题:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.rootWrain }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">解决措施:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.solvingMeasures }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">改进建议:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.suggestionsImprovement }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">经验提交人:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.create_by }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">提交时间:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.create_date }}</p>
                </v-col>
            </v-row>


        </v-sheet>

    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import TableComponents from '@/packages/Table.vue'

    import {ExperienceDetailHTTP} from '@/http/equipment/maintain'   // api
    import { showSuccessToast,showFailToast } from 'vant';

  export default {
    components:{
        AppBarPage,
        TableComponents
    },
    data: () => ({
        bufferRow:{}
    }),
    created(){
        this.initFunc()
    },
    methods: {
        // 初始化
        async initFunc(){
            const {ttAdRepairId}=this.$route.query

    
            const {data={}}=await ExperienceDetailHTTP({
                // url_params:{
                //     // "ttAdRepairId":ttAdRepairId, // "当前数据的ttAdRepairId字段值"
                // }
                url_RESTful:`/${ttAdRepairId}`   
            })

            this.bufferRow=data
        },
        // 查看维修文件
        checkFile(){
            showSuccessToast('正在建设中！')
        }

    },
  }
</script>