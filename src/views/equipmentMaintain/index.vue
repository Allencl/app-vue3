<template>
    <span>
        <AppBarPage>
            <template v-slot:appTabs>
                <v-tabs 
                    v-model="tab"
                    density="comfortable"  
                    align-with-title
                >
                    <v-tab value="1">当前维修任务</v-tab>
                    <v-tab value="2">我的维修任务</v-tab>
                </v-tabs> 
            </template>
        </AppBarPage>
        <div style="height: 50px;"></div>

        <v-window v-model="tab">
            <v-window-item value="1" class="v-window-item-table">
                <TableComponents
                    v-if="tab=='1'"
                    ref="table1"
                    url="/stage-api/iiot/equipmentRepair/list"
                >
                    <template v-slot:tableBody="props">
                        <v-card>
                            <v-row no-gutters class="table-title">
                                <v-col cols="6">
                                    <v-icon icon="mdi-dns" size="16" color="primary"></v-icon>
                                    <span class="font-weight-medium">维修设备</span>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ props.items.equipmentName }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">故障类型:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.faultTypeCn }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">故障位置:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.faultStationCn }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">故障详细描述:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.problemDesc }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">维修类型:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.reportType }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">报修人:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.reportBy }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">报修时间:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.reportTime }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="12" class="text-right">
                                    <v-btn @click="preemptClick(props)" color="error mt-1" density="compact" :rounded="0" variant="plain">抢单响应</v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </template>
                </TableComponents>
            </v-window-item>

            <v-window-item value="2" class="v-window-item-table">
                <!-- <span>url="/stage-api/iiot/equipmentRepair/listForApp"</span> -->
                <TableComponents
                    v-if="tab=='2'"
                    ref="table2"
                    url="/stage-api/iiot/equipmentRepair/list"
                >
                    <template v-slot:tableBody="props">
                        <v-card>
                            <v-row no-gutters class="table-title">
                                <v-col cols="6">
                                    <v-icon icon="mdi-dns" size="16" color="primary"></v-icon>
                                    <span class="font-weight-medium">维修设备</span>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ props.items.equipmentName }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">故障类型:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.faultTypeCn }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">故障位置:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.faultStationCn }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">故障详细描述:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.problemDesc }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">维修类型:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.reportType }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">报修人:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.reportBy }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">报修时间:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.reportTime }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4" class="text-center">
                                    <v-btn @click="checkExperience(props)" color="primary mt-1" density="compact" :rounded="0" variant="plain">查看维修经验</v-btn>
                                </v-col>
                                <v-col cols="4" class="text-center">
                                    <v-btn @click="cancelMaintain(props)" color="error mt-1" density="compact" :rounded="0" variant="plain">取消维修</v-btn>
                                </v-col>
                                <v-col cols="4" class="text-right">
                                    <v-btn @click="equipmentMaintain(props)" color="orange mt-1" density="compact" :rounded="0" variant="plain">设备维修</v-btn>
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

    import {PreemptHTTP} from '@/http/equipment/maintain'   // api
    import {CancelHTTP} from '@/http/equipment/maintain'   // api

    import { showSuccessToast,showFailToast } from 'vant';

  export default {
    components:{
        AppBarPage,
        TableComponents
    },
    data: () => ({
        tab: '1',
    }),

    methods: {
        /**
         * 抢单响应
        */
        async preemptClick(props){
            const {items}=props
            
            const {code}=await PreemptHTTP({
                payload:{ 
                    tmBasEquipmentId: items.tmBasEquipmentId   // 当前数据的tmBasEquipmentId字段
                }
            })
            
            if(code==200){
                showSuccessToast('操作成功！')
                this.$refs["table1"].initFunc() 
            }

        },
        // 查看维修经验
        async checkExperience(props){
            const {items}=props
            console.log("查看维修经验")
        },
        // 取消维修
        async cancelMaintain(props){
            const {items}=props

            const {code}=await CancelHTTP({
                payload:{
                    tmBasEquipmentId: items.tmBasEquipmentId //当前数据的tmBasEquipmentId字段值
                }
            })

            if(code==200){
                showSuccessToast('操作成功！')
                this.$refs.table2.initFunc()
            }

        },
        // 设备维修
        async equipmentMaintain(props){
            const {items}=props
            // console.log(items)
            this.$router.push({
                path:'/equipment/maintain/detail', 
                query:{row: JSON.stringify(items) }
            }) 
        }
    },
  }
</script>