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

            <van-picker-group
                title="预约日期"
                :tabs="['选择日期', '选择时间']"
                @confirm="onConfirm"
                @cancel="showPicker = false"
                >
                <van-date-picker
                    v-model="currentDate"
                    :min-date="minDate"
                    :max-date="maxDate"
                />
                <van-time-picker v-model="currentTime" />
                </van-picker-group>


            <!-- <van-date-picker
                v-model="currentDate"
                title="选择日期"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="onConfirm"
            /> -->
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
        fieldValue:"",
        showPicker:false,

        currentDate:[],
        // currentDate :['2021', '01', '01'],
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2028, 11, 1),

        currentTime:['12', '00']
    }),

    methods: {
        onConfirm(){
            const _date=this.currentDate
            const _time=this.currentTime

            const _format=`${_date.join("-")} ${_time.join(":")}`

            this.showPicker = false
            this.fieldValue = _format
            this.$emit('update:value', _format)
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
        // required
        required:{
            type: Boolean,
            default: ()=> false
        }

    }
  }
</script>