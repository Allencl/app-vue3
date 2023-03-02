<template>
    <span>
        <AppBarPage>
      

        </AppBarPage>

        <div class="v-window-item-table">
            <TableComponents
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
                                <p class="font-weight-medium text">维修类型:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.reportType }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">根本问题:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.rootWarin }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">解决措施:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.solvingMeasures }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">改进建议:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.suggestionsImprovement }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="12" class="text-right">
                                <v-btn @click="detailClick(props)" color="error mt-1" density="compact" :rounded="0" variant="plain">详情</v-btn>
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
                path:'/equipment/maintain/experienceDetail', 
                query:{  
                    ttAdRepairId: props.items.ttAdRepairId
                }
            }) 
        }   


    },
  }
</script>