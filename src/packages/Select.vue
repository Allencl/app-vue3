<template>
    <span>
        <van-field
            v-model="fieldValue"
            is-link
            readonly
            :required="required"
            :label="label"
            :placeholder="placeholder"
            :type="multiple? 'textarea':'text'"
            @click="showPicker = true"
        >
        </van-field>
        <van-popup v-model:show="showPicker" round position="bottom">

        <div v-if="multiple" style="overflow-y: auto;height:420px;padding-top:60px;">
            <div style="z-index:11;position:absolute;background:#fff;top:0px;left:0px;width:100%;">
                <v-row>
                    <v-col cols="6">
                        <v-btn variant="plain" @click="showPicker = false">
                            取消
                        </v-btn>
                    </v-col>
                    <v-col cols="6" class="text-right">
                        <v-btn @click="multipleHandle" variant="plain" color="primary">
                            确定
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
            <div
                v-for="(k,j) in option"
                :key="j"
            >
                <v-row>
                    <v-col cols="10">
                        <p class="font-weight-medium text-truncate">{{ k.text }}</p>
                    </v-col>
                    <v-col cols="2">
                        <van-checkbox v-model="k._checked"></van-checkbox>
                    </v-col>
                </v-row>
            </div>
            <div style="color:#fff">{{"1"}}</div>
            <div style="color:#fff">{{"1"}}</div>
            <div style="color:#fff">{{"1"}}</div>
            <div style="color:#fff">{{"1"}}</div>
        </div>

        <van-picker
            v-else
            :columns="option"
            @cancel="showPicker = false"
            @confirm="onConfirm"
        />

        </van-popup>
    </span>
</template>
<script>
import { showSuccessToast, showFailToast } from 'vant';
  export default {
    components:{

    },
    emits: ["update:value","onChange"],
    data: () => ({
        columns:[
            // { text: '杭州', value: 'Hangzhou' },
            // { text: '宁波', value: 'Ningbo' },
            // { text: '温州', value: 'Wenzhou' },
            // { text: '绍兴', value: 'Shaoxing' },
            // { text: '湖州', value: 'Huzhou' },
        ],
        fieldValue:"",
        showPicker:false
    }),

    methods: {
        onConfirm({ selectedOptions }){
            const {value,text}=selectedOptions[0]

            this.showPicker = false
            this.fieldValue = text
            this.$emit('update:value', value)
        },
        multipleHandle(){
            const _checkedList=this.option.filter(o=>o._checked)
            const _value=_checkedList.map(o=>o.value).join()
            this.showPicker=false
            this.fieldValue=_checkedList.map(o=>o.text).join()

            this.$emit('update:value', _value)
            this.$emit('onChange', _checkedList)
        }
    },
    props: {
        // 多选
        multiple:{
            type: Boolean,
            default: ()=> false 
        },
        // label
        label:{
            type: String,
            default: ()=> "标题"
        },
        // placeholder
        placeholder:{
            type: String,
            default: ()=> "请选择"
        }, 
        // 下拉数据
        option:{
            type: Array,
            default: ()=> []
        },
        // required
        required:{
            type: Boolean,
            default: ()=> false
        }
    }
  }
</script>