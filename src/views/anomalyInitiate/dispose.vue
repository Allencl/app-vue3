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
                    <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ "YC202302140001" }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">异常类型属性:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.faultTypeCn }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">紧急程度:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.faultStationCn }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">异常类型:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.problemDesc }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">异常内容:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.reportType }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">异常描述:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.reportBy }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">产品序列号:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.reportTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">产品名称:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.responseBy }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">异常地点:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.responseTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">设备型号:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.responseTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">发起人:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.maintainRepairBy }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">发起时间:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.productRepairTime }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">发起联系方式:</p>
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
                    <span class="font-weight-medium">异常转发信息</span>
                </v-col>
                <v-col cols="6">
                    <!-- <p @click="checkExpress" class="font-weight-medium text-right text-teal-lighten-1" color="primary">查看维修经验</p> -->
                </v-col>
            </v-row>


            <van-field v-model="explain" label="指派说明" required />

            <SelectComponents 
                v-model:value="user"
                label="指派到"
                required
                :option="selectOption"
            />
   
            <van-field v-model="remark" label="备注"  />

        </v-sheet>
        <div style="height:6px;"></div>
        <v-row no-gutters>
            <v-col cols="3" class="text-center">

            </v-col>
            <v-col cols="3" class="text-center">

            </v-col>
            <v-col cols="3" class="text-center">

            </v-col>
            <v-col cols="3" class="text-center">
                <v-btn color="primary">
                    确认指派
                </v-btn>
            </v-col>
        </v-row>
        <div style="height:36px;"></div>


    </span>
</template>
<script>

    import AppBarPage from '@/components/AppBar.vue'  // 异常处理 异常处理

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


        explain:"",         // 转发说明
        user:"",            // 转发到
        selectOption:[],    // 转发到 数据

        remark:"",   // 备注
    }),
    created(){
        this.initFunc()

    },
    methods: {
        // 初始化
        initFunc(){
            // const {row}=this.$route.query
            
            // this.bufferRow=JSON.parse(row)

        },

    },
  }
</script>