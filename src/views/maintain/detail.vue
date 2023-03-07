<template>
    <span>
        <AppBarPage>
      

        </AppBarPage>

        <v-sheet elevation="2" rounded class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-bullhorn" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">保养设备信息</span>
                </v-col>
                <v-col cols="6">
                    <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ bufferRow.equipmentName }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">任务类型:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.wbTt  }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">维护位置:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.faultStationCn  }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">维护内容:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.manitainContent  }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">策略类型:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.wbSt  }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">计划人:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.planImplementBy  }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters class="text">
                <v-col cols="4">
                    <p class="font-weight-medium text">到期时间:</p>
                </v-col>
                <v-col cols="8">
                    <p class="text-truncate font-weight-light">{{ bufferRow.expireTime  }}</p>
                </v-col>
            </v-row>

        </v-sheet>

        <v-sheet elevation="2" rounded class="custem-card">
            <v-row no-gutters class="custem-card-title">
                <v-col cols="6">
                    <v-icon icon="mdi-clock-time-five" size="16" color="primary"></v-icon>
                    <span class="font-weight-medium">实施报工</span>
                </v-col>
                <v-col cols="6">
                    <p @click="addManHourFunc" class="font-weight-medium text-right text-teal-lighten-1" color="primary">添加工时</p>
                </v-col>
            </v-row>

            <van-field v-model="value1" label="实施内容" type="textarea" placeholder="请输入" required  />

        </v-sheet>   

        <v-sheet class="v-window-item-table">
            <TableComponents
                ref="table1"
                :children="wbWorkhours"
            >
                <template v-slot:tableBody="props">
                    <v-card>
                        <v-row no-gutters class="table-title">
                            <v-col cols="6">
                                <v-icon icon="mdi-pencil-outline" size="16" color="primary"></v-icon>
                                <span class="font-weight-medium">工时 {{ props._index+1 }}</span>
                            </v-col>
                            <v-col cols="6" class="text-right">
                                <v-btn @click="editHandle(props)" color="primary mt-1" density="compact" :rounded="0" variant="plain">编辑</v-btn>
                                <v-btn @click="deleteHandle(props)" color="red mt-1" density="compact" :rounded="0" variant="plain">删除</v-btn>
                            
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">维护人:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.maintainBy   }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">维护工时:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.actualDuration }}{{' 分钟'}}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">工作内容:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.workContent   }}</p>
                            </v-col>
                        </v-row>
                    </v-card>
                </template>
            </TableComponents>
        </v-sheet>

        
        <div style="padding-left:4px;padding-right:4px;">
            <v-btn
                elevation="2"
                block
                @click="onSubmit"
            >
                确认
            </v-btn>
        </div>

        <div style="height: 60px;"></div>

    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import TableComponents from '@/packages/Table.vue'

    import {httpHandle} from '@/http/http'  // api
    import { showSuccessToast,showFailToast } from 'vant';
    import { showDialog  } from 'vant';

  export default {
    components:{
        AppBarPage,
        TableComponents
    },
    data: () => ({
        bufferRow:{},  // 行数据

        value1:"",  // 实施内容

        wbWorkhours:[]
    }),
    created(){
        this.initFunc()
    },
    methods: {
        // 初始化
        async initFunc(){
            const {row="{}"}=this.$route.query
            const _row=JSON.parse(row)

            this.bufferRow=_row
            this.wbWorkhours=_row.wbWorkhours

            this.$nextTick(()=>{
                this.$refs.table1.initFunc()
            })
            // console.log(this.bufferRow)
            // const a=  this.bufferRow.ttWbWorkhoursid

            // const {code}= await httpHandle({
            //     url:"/stage-api/iiot/workhours/"+a,
            //     method:'get'
            // })
        },
        // 提交
        async onSubmit(){
            const {value1,bufferRow}=this

            if(!value1.trim()){
                showFailToast("实施内容必填!")
                return
            }


            
            const _json={
                // ...bufferRow,  // 行数据
                // rootWrain: value1, // 根本问题  
                // solvingMeasures: value2,   // 解决措施        
                // suggestionsImprovement: value3 // 改进建议    
            }

            // const {code}=await SaveHTTP({
            //     payload:_json 
            // })

            // if(code==200){
            //     showSuccessToast('提交成功！')
            //     this.$router.push({
            //         path:'/equipmentMessage', 
            //         query:{ tabs:2 }
            //     }) 
            // }

        },
        // 添加工时
        addManHourFunc(){
            const {bufferRow}=this

            // console.log(bufferRow)
            this.$router.push({
                path:'/maintain/add', 
                query:{ row: JSON.stringify({
                    teWbMainTaskId:bufferRow.teWbMainTaskId
                }) }
            })
        },
        // 编辑  
        async editHandle(props){
            const {items}=props

            const {code,data={}}= await httpHandle({
                url:`/stage-api/iiot/workhours/${items.ttWbWorkhoursId}`,
                method:'get'
            })


            if(code==200){
                this.$router.push({
                    path:'/maintain/add', 
                    query:{ row: JSON.stringify(data)  }
                })
            }
        },
        // 删除
        async deleteHandle(props){
            const {items}=props

            showDialog({
                title: '删除',
                message: '删除后数据不可恢复，确认删除！',
                theme: 'round-button',
                closeOnClickOverlay:true,
            }).then(async () => {

                const {code,data={}}= await httpHandle({
                    url:`/stage-api/iiot/workhours/${items.ttWbWorkhoursId}`,
                    method:'DELETE'
                })


                if(code==200){
                    showSuccessToast('操作成功！')
                    this.$router.push({
                        path:'/maintain/index', 
                        query:{ tabs:2 }
                    }) 
                }
            });

        }
    },
  }
</script>