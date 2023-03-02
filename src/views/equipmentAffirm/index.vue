<template>
    <span>
        <AppBarPage>
      

        </AppBarPage>

        <div class="v-window-item-table">
            <!-- :params="{ warinState:'CP' }" -->
            <TableComponents
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
                            <v-col cols="4">
                                <p class="font-weight-medium text">维修人:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{  props.items.maintainRepairBy }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">维修结束时间:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.productRepairTime }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="12" class="text-right">
                                <v-btn @click="detailClick(props)" color="error mt-1" density="compact" :rounded="0" variant="plain">确认维修结束</v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </template>
            </TableComponents>
        </div>



    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import TableComponents from '@/packages/Table.vue'

    import {PreemptHTTP} from '@/http/equipment/maintain'   // api
    import { showSuccessToast,showFailToast } from 'vant';

  export default {
    components:{
        AppBarPage,
        TableComponents
    },
    data: () => ({
  
    }),

    methods: {
        // 详情
        detailClick(props){
            
            this.$router.push({
                path:'/equipmentAffirm/detail', 
                query:{  
                    row: JSON.stringify(props.items)
                }
            }) 
        }   


    },
  }
</script>