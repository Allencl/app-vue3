<template>
    <span>
        <AppBarPage />

        <v-sheet>
            <v-form ref="form">

                <v-text-field
                    v-model="formValue.name"
                    :counter="50"
                    variant="solo"
                    density="compact"     
                    clearable
                    :rules="[
                        v => !!v || '用户名必填！',
                        v => (v && v.length <= 50) || '用户名不能超过50个字符！',
                    ]"
                    required
                >
                    <template v-slot:label>
                        <span>
                            <v-icon icon="mdi-asterisk" color="#B71C1C" size="x-small"></v-icon>
                            <span class="pl-1">用户名</span>
                        </span>
                    </template>
                </v-text-field>
        
                <v-text-field
                    v-model="formValue.number"
                    variant="solo"
                    density="compact"     
                    clearable
                    :rules="[
                        v => !!v || '数字必填！',
                        v => (Number(v)>=0) || '数字必须大于等于0！',
                    ]"
                    type="number"
                    required
                    @blur="numberBlur"
                >
                    <template v-slot:label>
                        <span>
                            <v-icon icon="mdi-asterisk" color="#B71C1C" size="x-small"></v-icon>
                            <span class="pl-1">数字</span>
                        </span>
                    </template>
                </v-text-field>

                <v-select
                    v-model="formValue.select"
                    :items="items"
                    item-title="title"
                    item-value="value"
                    :rules="[v => !!v || '城市必选！']"
                    variant="solo" 
                    density="compact"     
                    clearable
                    required
                >
                    <template v-slot:label>
                        <span>
                            <v-icon icon="mdi-asterisk" color="#B71C1C" size="x-small"></v-icon>
                            <span class="pl-1">城市单选</span>
                        </span>
                    </template>
                </v-select>

                <v-select
                    v-model="formValue.selectMultiple"
                    :items="items"
                    item-title="title"
                    item-value="value"
                    :rules="[v => !!v.length || '城市必选！']"
                    variant="solo"
                    density="compact"     
                    chips
                    multiple
                    clearable
                    required
                >
                    <template v-slot:label>
                        <span>
                            <v-icon icon="mdi-asterisk" color="#B71C1C" size="x-small"></v-icon>
                            <span class="pl-1">城市多选</span>
                        </span>
                    </template>
                </v-select>

                <v-textarea 
                    v-model="formValue.description"
                    :counter="500"
                    rows="3"
                    variant="solo"
                    density="compact"     
                    clearable
                    :rules="[
                        v => !!v || '描述必填！',
                        v => (v && v.length <= 500) || '描述不能超过500个字符！',
                    ]"
                    required
                >
                    <template v-slot:label>
                        <span>
                            <v-icon icon="mdi-asterisk" color="#B71C1C" size="x-small"></v-icon>
                            <span class="pl-1">描述</span>
                        </span>
                    </template>
                </v-textarea>
        
                <v-checkbox
                v-model="formValue.checkbox"
                :rules="[v => !!v || '同意吗？!']"
                label="同意？"
                color="primary"
                density="compact"     
                required
                ></v-checkbox>
        
                <div class="d-flex flex-column">
                <v-btn
                    color="success"
                    class="mt-4"
                    block
                    @click="validate"
                >
                    Validate
                </v-btn>
        
                <v-btn
                    color="error"
                    class="mt-4"
                    block
                    @click="reset"
                >
                    Reset Form
                </v-btn>
        
                <v-btn
                    color="warning"
                    class="mt-4"
                    block
                    @click="resetValidation"
                >
                    Reset Validation
                </v-btn>
                </div>
            </v-form>
        </v-sheet>
    </span>
  </template>
  <script>
    import AppBarPage from '@/components/AppBar.vue'

  export default {
    components:{
        AppBarPage
    },
    data: () => ({

        // 表单数据
        formValue:{
            name: '',         // 单行文本
            number:0,         // 数字
            select: '2',     // 下拉框 单选   null 
            selectMultiple:['1','5'],   // 下拉框 多选
            description:"",   // 多行文本
            checkbox: false,
        },


        items: [
            {title:'悉尼',value:'1'},
            {title:'米兰',value:'2'},
            {title:'南非',value:'3'},
            {title:'巴西',value:'4'},
            {title:'古巴',value:'5'},
            {title:'亚斯南大',value:'6'},
            {title:'汉堡',value:'7'},
            {title:'底特律',value:'8'},
            {title:'刚果',value:'9'},
            {title:'新加坡',value:'10'},
            {title:'曼德拉西',value:'11'},
        ],

    }),

    methods: {

        numberBlur(){
            this.formValue.number=String(Number(this.formValue.number));
        },

      async validate () {
        const { valid } = await this.$refs.form.validate()

        console.log( this.formValue )

        if(!valid){
            alert('表单不完整！')
            return
        }

        // console.log( this.formValue )
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
  

  