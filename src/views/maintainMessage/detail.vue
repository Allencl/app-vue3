<template>
    <span>
        <AppBarPage>
      

        </AppBarPage>

        <div class="v-window-item-table">
            <TableComponents
                ref="table1"
                :auto="false"
                url="/stage-api/iiot/workhours/list"
                :params="{ ttWbMaintainId: ttWbMaintainId }"
            >
                <template v-slot:tableBody="props">
                    <v-card>
                        <v-row no-gutters class="table-title">
                            <v-col cols="6">
                                <v-icon icon="mdi-clock-time-five" size="16" color="primary"></v-icon>
                                <span class="font-weight-medium">工时 {{props._index+1}}</span>
                            </v-col>
                            <v-col cols="6">
                                <!-- <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ props.items.equipmentName }}</p> -->
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">维护人:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.maintainBy    }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">维护工时:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.actualDuration   }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">工作内容:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.workContent    }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">维护时间:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.createDate    }}</p>
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
        ttWbMaintainId:'',   
    }),
    created(){
        this.initFunc()
    },
    methods: {
        initFunc(){
            const {ttWbMaintainId}=this.$route.query

            this.ttWbMaintainId=ttWbMaintainId
            
            this.$nextTick(()=>{
                this.$refs.table1.initFunc()
            })
        }

    },
  }
</script>