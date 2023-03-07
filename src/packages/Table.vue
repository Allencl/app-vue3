<template>
    <span>
 
        <v-card v-if="paging" elevation="0" style="margin-bottom: 0px;">
            <v-btn
                variant="outlined"
                size="x-small"
                icon
                color="primary"
                style="margin-right:12px;"
                @click="previousHandle"
            >
                <v-icon size="32">mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
                variant="outlined"
                size="x-small"
                icon
                color="primary"
                @click="nextHandle"
            >
                <v-icon size="32">mdi-chevron-right</v-icon>
            </v-btn>
            <span style="position:relative;top:3px;margin-left:12px;">
                <span>第</span>
                <span style="padding-left:2px;padding-right:2px;">{{ current }}</span>
                <span style="margin-right:8px;">页</span>
                <span>共</span>
                <span style="padding-left:2px;padding-right:2px;">{{ page }}</span>
                <span>页</span>
            </span>
        </v-card>

        <slot 
            v-if="items.length"
            v-for="(o,i) in items" :key="i" 
            name="tableBody" 
            :items="o"
            :_index="i"
        >
        </slot>
        <p v-else class="text-center" style="padding-top:12px;">
            <v-icon icon="mdi-emoticon-sad-outline"></v-icon>
            无数据！
        </p>

    
    </span>
</template>
<script>
    import {TableHTTP} from '@/http/global'   // api

import { showSuccessToast, showFailToast } from 'vant';
  export default {
    components:{

    },
    emits: [],
    data: () => ({
        total:8,   // 总
        current:1, // 当前
        page:0,    // 页数

        paging:true,   // 分页

        // 列表数据
        items:[
            // {
            //     name:1,
            //     age:2
            // },

        ]
    }),
    created(){
        const {auto}=this

        if(auto){
            this.initFunc()
        }

    },
    methods: {
        // 上一页
        previousHandle(){
            const {current}=this

            if(current==1){
                showFailToast("第一页！");
                return
            }

            this.current=current-1
            this.$nextTick(()=>{
                this.initFunc(this.current)
            })
        },
        // 下一页
        nextHandle(){
            const {current,page}=this

            if(current>=page){
                showFailToast("最后一页！");
                return
            }

            this.current=current+1
            this.$nextTick(()=>{
                this.initFunc(this.current)
            })
        },
        // 初始化
        async initFunc(_current=1){
            const {url,params={},children}=this

            if(children){
                this.items=children
                this.paging=false
                return
            }
    
            const {code,total,msg,rows}=await TableHTTP({
                url:url,
                url_params:{
                    pageNum: _current,
                    pageSize: 10,
                    ...params,
                }
            })

            if(code==200){
                this.current=_current
                this.page=Math.ceil(total/10)
                this.items=rows
            } 

        }
    },
    props: {
        // 自动初始化
        auto:{
            type: Boolean,
            default: ()=> true
        },
        // 子级
        children:{
            type: Array,
            default: ()=> undefined
        },
        // url
        url:{
            type: String,
            default: ()=> ""
        }, 
        // 参数
        params:{
            type: Object,
            default: ()=> {}
        }
    }
  }
</script>