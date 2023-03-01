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
                    url="/stage-api/system/user/list"
                >
                    <template v-slot:tableBody="props">
                        <v-card @click="itemsClick(props)">
                            <v-row no-gutters class="table-title">
                                <v-col cols="6">
                                    <v-icon icon="mdi-vuetify" size="16" color="primary"></v-icon>
                                    <span class="font-weight-medium">维修设备{{ props.items.name }}</span>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">PT01006-线气检机200</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">故障类型:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">GZWZ10001-电力系统故障1001212122221212</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">故障位置:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">GZWZ10001-电力系统故障1001212122221212</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">故障详细描述:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">GZWZ10001-电力系统故障1001212122221212</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">维修类型:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">GZWZ10001-电力系统故障1001212122221212</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">报修人:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">GZWZ10001-电力系统故障1001212122221212</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="4">
                                    <p class="font-weight-medium text">报修时间:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="text-truncate font-weight-light">GZWZ10001-电力系统故障1001212122221212</p>
                                </v-col>
                            </v-row>
                            <v-row no-gutters class="text">
                                <v-col cols="12" class="text-right">
                                    <v-btn color="error mt-1" density="compact" :rounded="0" variant="plain">抢单响应</v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </template>
                </TableComponents>
            </v-window-item>

            <v-window-item value="2">
                Two
            </v-window-item>
        </v-window>




    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import TableComponents from '@/packages/Table.vue'

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
         * 点击行
        */
        itemsClick(props){
            const {items}=props
            console.log(items)
        }
    },
  }
</script>