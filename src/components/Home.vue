<template>
    <span class="layout-home">
        <AppBarPage />

        <CarouselComponent />

        <v-row class="home-card">
            <v-col cols="6">
                <CardBtnComponent 
                    name="maintain"
                    title="设备维修"
                    icon="mdi-tools"
                    color-icon="#3F51B5"
                    @clickCard="btnCardHandle"
                />
            </v-col>
            <v-col cols="6">
                <CardBtnComponent 
                    name="ddd"
                    title="供应商4"
                    icon="mdi-thumb-down"
                    color-icon="red"
                    @clickCard="btnCardHandle"
                />
            </v-col>
        </v-row>


        <v-row class="home-card">
            <v-col cols="6">
                <CardBtnComponent 
                    name="aaa"
                    title="表单示例页面"
                    icon="mdi-minus-circle"
                    color-icon="primary"
                    @clickCard="btnCardHandle"
                />
            </v-col>
            <v-col cols="6">
                <CardBtnComponent 
                    name="bbb"
                    title="供应商2"
                    icon="mdi-thumb-down"
                    color-icon="red"
                    @clickCard="btnCardHandle"
                />
            </v-col>
        </v-row>




        <!-- <v-row>
            <v-col cols="4"><v-divider style="position:relative;top:18px"></v-divider></v-col>  
            <v-col cols="4" class="text-center"><v-card-title style="font-size:14px;">到底了</v-card-title></v-col>     
            <v-col cols="4"><v-divider style="position:relative;top:18px"></v-divider></v-col>     
        </v-row> -->

        <MenuComponent 
            ref="menuRef"
        />




    </span>

</template>
  
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import CarouselComponent from '@/components/home/Carousel.vue'
    import CardBtnComponent from '@/components/home/CardBtn.vue'
    import MenuComponent from '@/components/home/MenuComponent.vue'




export default {
    components:{
        AppBarPage,
        CarouselComponent,
        CardBtnComponent,
        MenuComponent,
        
    },
    methods:{
        /**
         * 按钮 card
        */
        btnCardHandle:function(name,title){
            let items=[];

            switch (name) {
                case 'maintain':
                items=[
                        { 
                            text: '设备报修', 
                            icon: 'mdi-bullhorn',
                            color: "#3F51B5",
                            path: '/equipment' 
                        },
                        { 
                            text: '设备维修', 
                            icon: 'mdi-hammer-wrench',
                            color: "#1DE9B6",
                            path: '/test/date' 
                        },
                        { 
                            text: '维修确认', 
                            icon: 'mdi-check-bold',
                            color: "#18FFFF",
                            path: '/test/snackbar'
                        },
                        { 
                            text: '维修派工', 
                            icon: 'mdi-account-hard-hat',
                            color: "#689F38",
                            path: '/test/bi'
                        },
                        { 
                            text: '维修信息查询', 
                            icon: 'mdi-message-processing',
                            color: "#00BCD4",
                            path: '/test/bi'
                        },
                        { 
                            text: '维修信息统计', 
                            icon: 'mdi-calendar-text',
                            color: "#D4E157",
                            path: '/test/bi'
                        },
                        { 
                            text: '维修工时统计', 
                            icon: 'mdi-calendar-clock',
                            color: "#3F51B5",
                            path: '/test/bi'
                        },
                        { 
                            text: '评价维修', 
                            icon: 'mdi-text-box-edit',
                            color: "#1DE9B6",
                            path: '/test/bi'
                        }
                    ]
                    break;             
                case 'aaa':
                    items=[
                        { 
                            text: '表单页面', 
                            icon: 'mdi-clock',
                            path: '/test/form' 
                        },
                        { 
                            text: '日期页面', 
                            icon: 'mdi-clock',
                            path: '/test/date' 
                        },
                        { 
                            text: '消息页面', 
                            icon: 'mdi-clock',
                            path: '/test/snackbar'
                        },
                        { 
                            text: 'BI', 
                            icon: 'mdi-clock',
                            path: '/test/bi'
                        },


                        
                        

                    ]
                    break;
                case 'bbb':
                    items=[
                        { text: 'Real-Time2', icon: 'mdi-clock' },
                        { text: 'Audience2', icon: 'mdi-account' },
                        { text: 'Conversions2', icon: 'mdi-flag' },
                        { text: 'Real-Time2', icon: 'mdi-clock' },
                        { text: 'Audience2', icon: 'mdi-account' },
                        { text: 'Conversions2', icon: 'mdi-flag' },
                        { text: 'Real-Time2', icon: 'mdi-clock' },
                        { text: 'Audience2', icon: 'mdi-account' },
                        { text: 'Conversions2', icon: 'mdi-flag' },
                    ]
                    break;                    
            
                default:
                    break;
            }
            this.$refs.menuRef.showDrawer(title,items);
        }
    },
    data: () => ({ 
        // drawer:true
    }),
}
</script>

<style lang="scss">
.layout-home .home-card{
    margin-top: 8px;
    .v-col{padding:0px;}

    >div:nth-child(1){
        padding-right: 4px;
    }
    >div:nth-child(2){
        padding-left: 4px;
    }
}
</style>
  

  