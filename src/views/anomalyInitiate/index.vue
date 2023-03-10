<template>
    <span>
        <AppBarPage>
      

        </AppBarPage>

        <v-btn @click="sponsorHandle">
            发起异常
        </v-btn>

        <div class="v-window-item-table">
            <!--  url="/stage-api/iiot/abnormal/list" -->
            <TableComponents
                ref="table1"
                url="/stage-api/iiot/abnormal/list"
                :showSearchBtn="true"
                @searchClick="searchClick"
            >
                <template v-slot:tableBody="props">
                    <v-card>
                        <v-row no-gutters class="table-title">
                            <v-col cols="4">
                                <v-icon icon="mdi-dns" size="16" color="primary"></v-icon>
                                <span class="font-weight-medium">异常流水</span>
                            </v-col>
                            <v-col cols="5">
                                <p class="font-weight-medium text-truncate text-center text-teal-lighten-1" color="primary">{{ props.items.abnormalNo  }}</p>
                            </v-col>
                            
                            <v-col cols="3">
                                <p class="font-weight-medium text-right text-teal-lighten-1" color="primary">{{ formatStatus(props.items)  }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">异常类型:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.tmBasAbnormalTypeId   }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">异常类型属性:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.abnormalType  }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">紧急程度:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.urgentDegree   }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">异常内容:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.tmBasAbnormalContentId   }}</p>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="text">
                            <v-col cols="4">
                                <p class="font-weight-medium text">发起时间:</p>
                            </v-col>
                            <v-col cols="8">
                                <p class="text-truncate font-weight-light">{{ props.items.initiateTime }}</p>
                            </v-col>
                        </v-row>

                        <v-row no-gutters class="text">
                            <v-col v-if="props.items.abnormalState=='40'" cols="3" class="text-right">
                                <v-btn @click="closeClick(props)" color="error mt-1" density="compact" :rounded="0" variant="plain">异常关闭</v-btn>
                            </v-col>
                            <v-col v-if="props.items.abnormalState=='20'" cols="3" class="text-right">
                                <v-btn @click="disposeClick(props)" color="error mt-1" density="compact" :rounded="0" variant="plain">异常处理</v-btn>
                            </v-col>
                            <v-col v-if="props.items.abnormalState=='20'" cols="3" class="text-right">
                                <v-btn @click="appointClick(props)" color="error mt-1" density="compact" :rounded="0" variant="plain">异常指派</v-btn>
                            </v-col>
                            <v-col v-if="props.items.abnormalState=='10'" cols="3" class="text-right">
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



        <SearchPage 
            ref="searchPage" 
            @searchHandle="searchHandle"
        />


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
    created(){
        // 判断 状态


    },
    methods: {
        // 详情
        async detailClick(props){
            const {items}=props
            
            
            this.$router.push({
                path:'/anomalyInitiate/detail', 
                query:{ ttQmAbnormalId: items.ttQmAbnormalId }
            }) 

        }, 
        // 处理 状态
        formatStatus(items){


            let _text=""

            switch (items.abnormalState) {
                case '10':  
                    _text="待转发"
                    break;
                case '20':  
                    _text="待指派"
                    break;   
                case '30':  
                    _text="待处理"
                    break;    
                case '40':  
                    _text="待关闭"
                    break;   
                case '90':  
                    _text="已关闭"
                    break; 
                case '60':  
                    _text="已驳回"
                    break;      
                default:
                    break;
            }

            return _text
     


        },
        // 查询
        searchClick(){
            // console.log( this.$refs.searchPage )
            this.$refs.searchPage.showDrawer()
        },
        // 查询结果
        searchHandle(option){
            // console.log(option)
            this.$refs.table1.initFunc(1,{
                ...option
            })

        },
        // 发起异常
        sponsorHandle(){
            
            this.$router.push({
                path:'/anomalyInitiate/sponsor', 
                query:{ }
            })    
        },
        // 异常转发
        transpondClick(){
            // 待转发
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