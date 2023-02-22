<template>
    <span>
        <AppBarPage>
        </AppBarPage>


        <ScanBarComponents 
            ref="scanBar"
            placeholder="扫描或输入设备编号"
            @searchClick="barSearchClick"
        />

        <v-card>
            <van-field
                v-model="fieldValue"
                is-link
                readonly
                label="请选择设备"
                placeholder="请选择设备"
                @click="show = true"
            />
            <van-popup v-model:show="show" round position="bottom">
                <van-cascader
                    v-model="cascaderValue"
                    title="请选择设备"
                    :options="options"
                    active-color="#4CAF50"
                    @close="show = false"
                    @finish="onFinish"
                />
            </van-popup>

            <!-- <v-card  class="mt-2 mb-4">
                <v-btn  color="primary">
                    确定
                </v-btn>
            </v-card> -->
            <div class="mt-6 mb-4 pl-2 pr-2">
                <v-btn @click="submit" block color="primary" variant="outlined">
                    确定
                </v-btn>
            </div>

        </v-card>




    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import ScanBarComponents from '@/packages/ScanBar.vue'
    

  export default {
    components:{
        AppBarPage,
        ScanBarComponents
    },
    data: () => ({
        show:false,
        fieldValue:"",
        cascaderValue:"",

        options:[
            {
                text: '浙江省',
                value: '330000',
                children: [
                    { 
                        text: '杭州市', 
                        value: '330100',
                        children:[
                            {
                                text: '上城区', 
                                value: '8330100',   
                            },
                            {
                                text: '下城区', 
                                value: '8330102',   
                            }
                        ] 
                    }
                ],
            },
            {
                text: '江苏省',
                value: '320000',
                children: [{ text: '南京市', value: '320100' }],
            },
        ]
    }),

    methods: {
        // 头部 查询
        barSearchClick(value){
            console.log(value)

            // this.$refs.scanBar.showLoading(true)

            // setTimeout(()=>{
            //     this.$refs.scanBar.showLoading(!true)
            // },2000)
        },
        onFinish ({ selectedOptions }){
            this.show = false;
            this.fieldValue = selectedOptions.map((option) => option.text).join('/');
        },
        // 确定
        submit(){
            this.$router.push("/equipment/repairs");
        }
    },
  }
</script>