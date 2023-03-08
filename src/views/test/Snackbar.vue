<template>
    <span>
        <AppBarPage>
            <template v-slot:appTabs>
                <v-tabs align-with-title>
                    <v-tab>Tab 1</v-tab>
                    <v-tab>Tab 2</v-tab>
                    <v-tab>Tab 3</v-tab>
                </v-tabs> 
            </template>
        </AppBarPage>
        <div style="height: 70px;"></div>

        <v-btn elevation="2" @click="aaa">按钮111</v-btn>
        <v-btn elevation="2">按钮222</v-btn>
        <v-btn elevation="2">按钮333</v-btn>
        <v-btn elevation="2">按钮444</v-btn>
        <v-btn elevation="2">按钮555</v-btn>


        <van-button type="primary" @click="ccc">主要按钮</van-button>
        <van-button type="success">成功按钮</van-button>
        <van-button type="default">默认按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>

        <div>
            111
        </div>
        <van-uploader :after-read="afterRead" />

    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import { showSuccessToast,showFailToast } from 'vant';

  export default {
    components:{
        AppBarPage
    },
    data: () => ({

    }),

    methods: {
        aaa(){
            // console.log( this.$store )
            // console.log("8987")


        },
        ccc(){
            console.log(this)

            showSuccessToast('成功文案');
            // showFailToast('失败文案');
        },
        afterRead (file){
            const _file=JSON.stringify(file)

            showSuccessToast({  
                duration: 20000,
                message: _file
            })
            // 此时可以自行将文件上传至服务器
            // console.log( JSON.stringify(file) );
        }
    },
  }
</script>