<template>
    <span>
        <AppBarPage>
      

        </AppBarPage>

        <div class="v-window-item-table">
            <!--  url="/stage-api/iiot/abnormal/list" -->
            <TableComponents
                ref="table1"
                url="/stage-api/iiot/maintain/list"
                :showSearchBtn="true"
                @searchClick="searchClick"
            >
                <template v-slot:tableBody="props">
                    <v-card>
                        <v-row no-gutters class="table-title">
                            <v-col cols="6">
                                <v-icon icon="mdi-dns" size="16" color="primary"></v-icon>
                                <span class="font-weight-medium">异常流水</span>
                            </v-col>
                            <v-col cols="6">
                                <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ props.items.equipmentName }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">异常类型:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.wbTt   }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">异常类型属性:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.wbSt  }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">紧急程度:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.faultStationCn   }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">异常内容:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.manitainContent   }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">发起时间:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.implementContent }}</p>
                            </v-col>
                        </v-row>

                        <v-row no-gutters class="text">
                            <v-col cols="3" class="text-right">
                                <v-btn @click="closeClick(props)" color="error mt-1" density="compact" :rounded="0" variant="plain">异常关闭</v-btn>
                            </v-col>
                            <v-col cols="3" class="text-right">
                                <v-btn @click="disposeClick(props)" color="error mt-1" density="compact" :rounded="0" variant="plain">异常处理</v-btn>
                            </v-col>
                            <v-col cols="3" class="text-right">
                                <v-btn @click="appointClick(props)" color="error mt-1" density="compact" :rounded="0" variant="plain">异常指派</v-btn>
                            </v-col>
                            <v-col cols="3" class="text-right">
                                <v-btn @click="transpondClick(props)" color="error mt-1" density="compact" :rounded="0" variant="plain">异常转发</v-btn>
                            </v-col>
                            <v-col cols="3" class="text-right">
                                <v-btn @click="detailClick(props)" color="error mt-1" density="compact" :rounded="0" variant="plain">详情</v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </template>
            </TableComponents>
        </div>

        <SearchPage ref="searchPage" />


    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import TableComponents from '@/packages/Table.vue'

    import  SearchPage from './search.vue' 

    import {OverHTTP} from '@/http/equipment/affirm'   // api
    import { showSuccessToast,showFailToast } from 'vant';

  export default {
    components:{
        AppBarPage,
        TableComponents,
        SearchPage
    },
    data: () => ({

    }),

    methods: {
        // 详情
        async detailClick(props){
            const {items}=props
            
            
            this.$router.push({
                path:'/anomalyInitiate/detail', 
                query:{ }
            }) 

        }, 
        // 查询
        searchClick(){
            // console.log( this.$refs.searchPage )
            this.$refs.searchPage.showDrawer()
        },
        // 异常转发
        transpondClick(){
            this.$router.push({
                path:'/anomalyInitiate/transpond', 
                query:{ }
            })       
        },
        // 异常指派
        appointClick(){
            this.$router.push({
                path:'/anomalyInitiate/appoint', 
                query:{ }
            }) 
        },
        // 异常处理
        disposeClick(){
            this.$router.push({
                path:'/anomalyInitiate/dispose', 
                query:{ }
            }) 
        },
        // 异常关闭
        closeClick(){
            this.$router.push({
                path:'/anomalyInitiate/close', 
                query:{ }
            }) 
        }


    },
  }
</script>