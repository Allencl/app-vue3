<template>
    <span>
        <AppBarPage>
      

        </AppBarPage>

        <div class="v-window-item-table">
            <TableComponents
                ref="table1"
                url="/stage-api/iiot/maintain/list"
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
                                <p class="text-truncate font-weight-light">{{ props.items.wbTt   }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">策略明细:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.wbSt  }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">维护位置:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.faultStationCn   }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">维护内容:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.manitainContent   }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">实施内容:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.implementContent }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">额定工时:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.ratedDuration     }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">固定工时:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.implementDuration   }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">实施人:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{  props.items.implementBy  }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">实施时间:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.implementTime  }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="12" class="text-right">
                                <v-btn @click="detailClick(props)" color="error mt-1" density="compact" :rounded="0" variant="plain">查看工时</v-btn>
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

    import {OverHTTP} from '@/http/equipment/affirm'   // api
    import { showSuccessToast,showFailToast } from 'vant';

  export default {
    components:{
        AppBarPage,
        TableComponents
    },
    data: () => ({
  
    }),

    methods: {
        // 查看工时
        async detailClick(props){
            const {items}=props
            
            
            this.$router.push({
                path:'/maintainMessage/detail', 
                query:{ ttWbMaintainId:items.ttWbMaintainId }
            }) 

        }   


    },
  }
</script>