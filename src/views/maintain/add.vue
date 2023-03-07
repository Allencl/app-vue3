<template>
    <span>
        <AppBarPage>
        </AppBarPage>

        <v-row no-gutters style="margin-bottom:8px;">
            <v-col cols="6">
                <v-icon icon="mdi-bullhorn" size="16" color="#3F51B5"></v-icon>
                <span style="padding-left:6px;">保养设备信息</span>
            </v-col>
            <v-col cols="6" class="text-right" style="padding-right:6px">
                <span class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ bufferRow.equipmentName }}</span>
            </v-col>
        </v-row>



        <v-sheet elevation="2" rounded class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-plus" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">工时添加</span>
                </v-col>
                <v-col cols="6">
                    <!-- <p @click="checkExpress" class="font-weight-medium text-right text-teal-lighten-1" color="primary">查看维修经验</p> -->
                </v-col>
            </v-row>


            <SelectComponents 
                v-model:value="user"
                ref="select1"
                label="维护人"
                required
                :option="repairmanSelectOption"

            />

            <van-field 
                v-model="time" 
                type="number" 
                placeholder="请输入..."
                label="维护工时（分钟）" 
                required 
            />


            <van-field 
                v-model="content" 
                rows="2"
                autosize
                label="工作内容"
                type="textarea"
                placeholder="请输入..."
                maxlength="500"
                show-word-limit
                required
            />
   

        </v-sheet>

        <v-row no-gutters>
            <v-col cols="12">
                <v-btn
                    block
                    @click="onSubmit"
                >
                    确认
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
    import {httpHandle} from '@/http/http'  // api
    import {RepairmanHTTP} from '@/http/equipment/repairs'   // api



    import moment from "moment"
import { windowWidth } from 'vant/lib/utils'

  export default {
    components:{
        AppBarPage,
        SelectComponents
    },
    data: () => ({
        bufferRow:{},  // 行数据


        user:"",     // 维护人    
        time:"",   // 工时
        content:"",  // 工作内容

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
        },
        // 报修人
        async initRepairman(){
            const {rows=[]}=await RepairmanHTTP()
            this.repairmanSelectOption=rows.map(o=> Object.assign({text:`${o.userName}-${o.nickName}`,value:o.userName}))
        
            // 设置 初始化
            this.$nextTick(()=>{
                if(this.bufferRow.maintainBy){
                    this.$refs.select1.setValue( this.bufferRow.maintainBy )
                    this.time=this.bufferRow.actualDuration
                    this.content=this.bufferRow.workContent
                }
            })

        },
        // 确认维修
        async onSubmit(){
            const {bufferRow,user,time,content}=this

            if(!user){
                showFailToast("维护人必填!")
                return
            }


            if(!time.trim()){
                showFailToast("维护工时必填!")
                return
            }

            if(!content.trim()){
                showFailToast("工作内容必填!")
                return
            }

            
            const _json={
                teWbMainTaskId: bufferRow.teWbMainTaskId,  // 当前数据的teWbMainTaskId字段  维保任务id", 
                ttWbWorkhoursId: bufferRow.ttWbWorkhoursId,  // "当前数据的ttWbWorkhoursid字段  工时id"
                maintainBy: user, // 维护人 选中数据的 userName
                actualDuration:time , // 填写的  工作内容
                workContent: content, // 填写的 维护工时
            }


            const {code,data={}}= await httpHandle({
                url:'/stage-api/iiot/workhours',
                method: bufferRow.ttWbWorkhoursId?'PUT':"post",
                payload:_json
            })

            if(code==200){
                showSuccessToast('操作成功！')
                this.$router.push({
                    path:'/maintain/index', 
                    query:{ tabs:2 }
                }) 
            }
            
        },


    },
  }
</script>