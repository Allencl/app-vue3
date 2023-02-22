<template>
    <span>
        <van-field
            v-model="fieldValue"
            is-link
            readonly
            :required="required"
            :label="label"
            :placeholder="placeholder"
            @click="showPicker = true"
        >
        </van-field>
        <van-popup v-model:show="showPicker" round position="bottom">
        <van-picker
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
    emits: ["update:value"],
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
        }
    },
    props: {
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