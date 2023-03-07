<template>
    <span>
        <AppBarPage>
            <template v-slot:appTabs>
                <v-tabs 
                    v-model="tab"
                    density="comfortable"  
                    align-with-title
                >
                    <v-tab value="1">当前保养任务</v-tab>
                    <v-tab value="2">我的保养任务</v-tab>
                </v-tabs> 
            </template>
        </AppBarPage>
        <div style="height: 50px;"></div>

        <v-window v-model="tab">
            <v-window-item value="1" class="v-window-item-table">
                <TableComponents
                    v-if="tab=='1'"
                    ref="table1"
                    url="/stage-api/iiot/mainTask/list"
                >
                    <template v-slot:tableBody="props">
                        <v-card>
                            <v-row no-gutters class="table-title">
                                <v-col cols="6">
                                    <v-icon icon="mdi-dns" size="16" color="primary"></v-icon>
                                    <span class="font-weight-medium">保养设备</span>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ props.items.equipmentName }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">任务类型:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.wbTt  }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">维护位置:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.faultStationCn  }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">维护内容:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.manitainContent  }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">策略类型:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.wbSt  }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">计划保养人:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.planImplementBy  }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">到期时间:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">
                                        {{ props.items.expireTime}}
                                        <span :class=" props.items.expireStatus=='0'?'text-cyan-lighten-1':'text-red-darken-4' ">{{ props.items.expireStatus=='0'?'未到期':'已到期' }}</span>
                                    </p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4" class="text-center">
                                    
                                </v-col>
                                <v-col cols="4" class="text-center">
                                    
                                </v-col>
                                <v-col cols="4" class="text-right">
                                    <v-btn @click="experienceEdit(props)" color="orange mt-1" density="compact" :rounded="0" variant="plain">抢单实施</v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </template>
                </TableComponents>
            </v-window-item>

            <v-window-item value="2" class="v-window-item-table">

                <TableComponents
                    v-if="tab=='2'"
                    ref="table2"
                    url="/stage-api/iiot/mainTask/list"
                    :params="{ wbMais:'IO' }"
                >
                <template v-slot:tableBody="props">
                        <v-card>
                            <v-row no-gutters class="table-title">
                                <v-col cols="6">
                                    <v-icon icon="mdi-dns" size="16" color="primary"></v-icon>
                                    <span class="font-weight-medium">保养设备</span>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ props.items.equipmentName }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">任务类型:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.wbTt  }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">维护位置:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.faultStationCn  }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">维护内容:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.manitainContent  }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">策略类型:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.wbSt  }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">计划保养人:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.planImplementBy  }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">到期时间:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">
                                        {{ props.items.expireTime}}
                                        <span :class=" props.items.expireStatus=='0'?'text-cyan-lighten-1':'text-red-darken-4' ">{{ props.items.expireStatus=='0'?'未到期':'已到期' }}</span>
                                    </p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4" class="text-center">
                                    
                                </v-col>
                                <v-col cols="4" class="text-center">
                                    <v-btn @click="cancelHandle(props)" color="red mt-1" density="compact" :rounded="0" variant="plain">取消保养</v-btn>
                                </v-col>
                                <v-col cols="4" class="text-right">
                                    <v-btn @click="reportHandle(props)" color="orange mt-1" density="compact" :rounded="0" variant="plain">实施报工</v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </template>
                </TableComponents>
            </v-window-item>
        </v-window>

    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import TableComponents from '@/packages/Table.vue'

    import {httpHandle} from '@/http/http'  // api


    import { showSuccessToast,showFailToast } from 'vant'
    import { showDialog  } from 'vant'


  export default {
    components:{
        AppBarPage,
        TableComponents
    },
    data: () => ({
        tab: '1',
    }),
    created(){
        this.initFunc()
    },
    methods: {
        // 初始化
        initFunc(){
            const {tabs}=this.$route.query

            if(tabs){
                this.tab=tabs
            }
        },
        // 抢单实施
        async experienceEdit(props){
            const {items}=props

    
            const {code}= await httpHandle({
                url:"/stage-api/iiot/mainTask",
                method:'PUT',
                payload:{
                    teWbMainTaskId: items.teWbMainTaskId,  // 当前数据的teWbMainTaskId字段  维保任务id, 
	                wbMais: items.wbMais,  // 当前数据的wbMais字段  实施状态  IO（实施中）
                }
            })


            if(code==200){
                showSuccessToast('操作成功！')
                this.$refs.table1.initFunc()
            }


        },
        // 取消保养
        async cancelHandle(props){
            const {items}=props

            showDialog({
                title: '取消确认',
                message: '取消后数据不可恢复，确认取消！',
                theme: 'round-button',
                closeOnClickOverlay:true,
            }).then(async () => {


                const {code}= await httpHandle({
                    url:"/stage-api/iiot/mainTask/cancelwbImp",
                    method:'post',
                    payload:{
                        teWbMainTaskId: items.teWbMainTaskId,  // 当前数据的teWbMainTaskId字段  维保任务id, 
                    }
                })


                if(code==200){
                    showSuccessToast('操作成功！')
                    this.$refs.table2.initFunc()
                }


            });

    


        },
        // 实施报工
        async reportHandle(props){
            const {items}=props

            this.$router.push({
                path:'/maintain/detail', 
                query:{ row: JSON.stringify(items)  }
            }) 
        },
    },
  }
</script>