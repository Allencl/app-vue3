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
                    <v-icon icon="mdi-pencil-outline" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">维修经验填写</span>
                </v-col>
                <v-col cols="6">
                    <p @click="uploadFunc" class="font-weight-medium text-right text-teal-lighten-1" color="primary">上传维修文件</p>
                </v-col>
            </v-row>

            <van-field v-model="value1" label="根本问题" type="textarea" placeholder="请输入" required  />
            <van-field v-model="value2" label="解决措施" type="textarea" placeholder="请输入" required  />
            <van-field v-model="value3" label="改进建议" type="textarea" placeholder="请输入" required  />

        </v-sheet>   
        
        <v-btn
            elevation="2"
            block
            @click="onSubmit"
        >
            确认
        </v-btn>

        <div style="height: 60px;"></div>

    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import TableComponents from '@/packages/Table.vue'

    import {CheckDetailHTTP,SaveHTTP} from '@/http/equipment/message'   // api
    
    import { showSuccessToast,showFailToast } from 'vant';

  export default {
    components:{
        AppBarPage,
        TableComponents
    },
    data: () => ({
        bufferRow:{},  // 行数据

        value1:"",  //根本问题
        value2:"",  //解决措施
        value3:"",  //改进建议

    }),
    created(){
        this.initFunc()
    },
    methods: {
        // 初始化
        async initFunc(){
            const {ttAdRepairId}=this.$route.query

    
            const {data={}}=await CheckDetailHTTP({
                url_RESTful:`/${ttAdRepairId}`   
                // url_RESTful:"/462191250168418304"
            })

            this.bufferRow=data
        },
        // 提交
        async onSubmit(){
            const {value1,value2,value3,bufferRow}=this

            if(!value1.trim()){
                showFailToast("根本问题必填!")
                return
            }

            if(!value2.trim()){
                showFailToast("解决措施必填!")
                return
            }

            if(!value3.trim()){
                showFailToast("改进建议必填!")
                return
            }
            
            const _json={
                ...bufferRow,  // 行数据
                rootWrain: value1, // 根本问题  
                solvingMeasures: value2,   // 解决措施        
                suggestionsImprovement: value3 // 改进建议    
            }

            const {code}=await SaveHTTP({
                payload:_json 
            })

            if(code==200){
                showSuccessToast('提交成功！')
                this.$router.push({
                    path:'/equipmentMessage', 
                    query:{ tabs:2 }
                }) 
            }

        },
        // 上传维修文件
        uploadFunc(){
            showSuccessToast('正在建设中！')

        }
    },
  }
</script>