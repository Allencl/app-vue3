<template>
    <span>
        <AppBarPage>
            <template v-slot:appTabs>
                <v-tabs 
                    v-model="tab"
                    density="comfortable"  
                    align-with-title
                >
                    <v-tab value="1">已填写</v-tab>
                    <v-tab value="2">未填写</v-tab>
                </v-tabs> 
            </template>
        </AppBarPage>
        <div style="height: 50px;"></div>

        <v-window v-model="tab">
            <v-window-item value="1" class="v-window-item-table">
                <TableComponents
                    v-if="tab=='1'"
                    ref="table1"
                    url="/stage-api/iiot/equipmentRepairHistory/list"
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
                                <v-col cols="4">
                                    <p class="font-weight-medium text">维修人:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.maintainRepairBy }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">维修结束时间:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.maintainRepairTime }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">是否外修:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.isRepair?'是':'否' }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">是否报废:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.isStop?'是':'否' }}</p>
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
                    url="/stage-api/iiot/equipmentRepairHistory/list"
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
                                <v-col cols="4">
                                    <p class="font-weight-medium text">维修人:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.maintainRepairBy }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">维修结束时间:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.maintainRepairTime }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">是否外修:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.isRepair?'是':'否' }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">是否报废:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">{{ props.items.isStop?'是':'否' }}</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4" class="text-center">
                                    
                                </v-col>
                                <v-col cols="4" class="text-center">
                                    
                                </v-col>
                                <v-col cols="4" class="text-right">
                                    <v-btn @click="experienceEdit(props)" color="orange mt-1" density="compact" :rounded="0" variant="plain">经验填写</v-btn>
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
        // 经验填写
        async experienceEdit(props){
            const {items}=props

            this.$router.push({
                path:'/equipmentMessage/detail', 
                query:{ ttAdRepairId: items.ttAdRepairId }
            }) 
        }
    },
  }
</script>