<template>
    <span class="layout-home">

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

        <v-row class="home-card">
            <v-col cols="6">
                <CardBtnComponent 
                    name="ccc"
                    title="供应商3"
                    icon="mdi-thumb-down"
                    color-icon="red"
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


        <MenuComponent 
            ref="menuRef"
        />


    </span>

</template>
  
<script>
  import CardBtnComponent from '@/components/home/CardBtn.vue'
  import MenuComponent from '@/components/home/MenuComponent.vue'



export default {
    components:{
        CardBtnComponent,
        MenuComponent
    },
    methods:{
        /**
         * 按钮 card
        */
        btnCardHandle:function(name,title){
            let items=[];

            switch (name) {
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
  

  