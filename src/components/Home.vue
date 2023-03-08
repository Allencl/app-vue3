<template>
    <span class="layout-home">
        <AppBarPage />

        <CarouselComponent />

        <v-row class="home-card">
            <v-col cols="6">
                <CardBtnComponent 
                    name="service"
                    title="设备维修"
                    icon="mdi-tools"
                    color-icon="#3F51B5"
                    @clickCard="btnCardHandle"
                />
            </v-col>
            <v-col cols="6">
                <CardBtnComponent 
                    name="maintain"
                    title="设备保养"
                    icon="mdi-dns"
                    color-icon="#8BC34A"
                    @clickCard="btnCardHandle"
                />
            </v-col>
        </v-row>

        <v-row class="home-card">
            <v-col cols="6">
                <CardBtnComponent 
                    name="abnormal"
                    title="异常处理"
                    icon="mdi-alert"
                    color-icon="#FF9800"
                    @clickCard="btnCardHandle"
                />   
            </v-col>
        </v-row>

        <!-- <v-row class="home-card">
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
        </v-row> -->




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
                // 设备维修
                case 'service':
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
                            path: '/equipment/maintain' 
                        },
                        { 
                            text: '维修确认', 
                            icon: 'mdi-check-bold',
                            color: "#18FFFF",
                            path: '/equipment/equipmentAffirm'
                        },
                        // { 
                        //     text: '维修派工', 
                        //     icon: 'mdi-account-hard-hat',
                        //     color: "#689F38",
                        //     path: '/test/bi'
                        // },
                        { 
                            text: '维修信息查询', 
                            icon: 'mdi-message-processing',
                            color:"#FF9800",
                            path: '/equipmentMessage'
                        },

                    ]
                    break; 
                // 设备保养            
                case 'maintain':
                    items=[
                        { 
                            text: '设备保养', 
                            icon: 'mdi-dns',
                            color:'#8BC34A',
                            path: '/maintain/index' 
                        },
                        { 
                            text: '保养信息查询', 
                            icon: 'mdi-clock',
                            color:"#FF9800",
                            path: '/maintainMessage/index' 
                        },
                    ]
                    break;
                // 异常处理
                case 'abnormal':
                    items=[
                        { text: '异常发起',path:"/anomalyInitiate/index", color:'#8BC34A', icon: 'mdi-rocket-launch' },
                        { text: '异常转发',color:'#AFB42B', icon: 'mdi-forwardburger' },
                        { text: '异常指派',color:'#303F9F', icon: 'mdi-clipboard-arrow-left' },
                        { text: '异常处理',color:'#43A047', icon: 'mdi-monitor-small' },
                        { text: '异常关闭',color:'#F4511E', icon: 'mdi-close-circle-outline' },
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
  

  