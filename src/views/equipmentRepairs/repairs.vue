<template>
    <span>
        <AppBarPage>
        </AppBarPage>
        


        <v-sheet elevation="2" rounded class="pa-1">
            <div class="text-h7 card-title-index1">
                <v-icon size="x-small" color="#26C6DA" icon="mdi-file-document-edit"></v-icon>
                <span>故障确认</span>
            </div>
            <SelectComponents 
                v-model:value="formData.typeSelectValue"
                label="故障类型"
                required
                :option="typeOption"
            />
            <SelectComponents 
                v-model:value="formData.locationSelectValue"
                label="故障位置"
                required
                :option="locationOption"
            />

            <van-field
                v-model="formData.description"
                rows="2"
                autosize
                label="故障详细描述"
                type="textarea"
                placeholder="请输入..."
                maxlength="200"
                show-word-limit
            />
        </v-sheet>

        <div style="height:12px;"></div>
        <v-sheet elevation="2" rounded class="pa-1">
            <div class="text-h7 card-title-index1">
                <v-icon size="x-small" color="#3F51B5" icon="mdi-bullhorn"></v-icon>
                <span>报修确认</span>
            </div>
            <SelectComponents 
                v-model:value="formData.maintainTypeSelectValue"
                label="维修类型"
                required
                :option="maintainTypeSelectOption"
            />

            <van-field 
                v-model="formData.user"
                label="报修人" 
                placeholder="请输入" 
            />

            <DatePickerComponents 
                v-model:value="formData.date"
                label="报修时间" 
            />
        </v-sheet>

        <div class="mt-3 mb-4 ">
            <v-btn block color="primary" variant="outlined" @click="submit">
                确定
            </v-btn>
        </div>

    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'
    import SelectComponents from '@/packages/Select.vue'
    import DatePickerComponents from '@/packages/DatePicker.vue'



    import { showSuccessToast,showFailToast } from 'vant';

  export default {
    components:{
        AppBarPage,
        SelectComponents,
        DatePickerComponents
    },
    data: () => ({
        // 表单数据
        formData:{
            typeSelectValue:"",  //  故障类型    
            locationSelectValue:"",   // 故障位置
            description:"",   // 描述

            maintainTypeSelectValue:"",   // 维修类型
            user:"",                    // 报修人
            date:"",  // 报修时间
        },


        // 故障类型 数据
        typeOption:[
            { text: '动力系统故障', value: '1' },
            { text: '电气系统故障', value: '2' },
            { text: '工具道具故障', value: '3' },
            { text: '网路故障', value: '4' },
        ],

        // 故障位置 数据
        locationOption:[
            { text: '动力系统', value: '1' },
            { text: '电气系统', value: '2' },
            { text: '工具道具', value: '3' },
            { text: '网路', value: '4' },
        ],



        // 维修类型 数据
        maintainTypeSelectOption:[
            { text: '动力系统7', value: '1' },
            { text: '电气系统7', value: '2' },
            { text: '工具道具7', value: '3' },
            { text: '网路7', value: '4' },
        ]
    }),
    methods: {
        // 提交
        submit(){
            const {}=this.formData;
            console.log(this.formData)
        }
    },
  }
</script>