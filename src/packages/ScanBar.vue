<template>
    <v-card
        class="mx-auto mb-2"
        density="compact"
        elevation="3"

    >
        <v-card-text class="pa-0">
            <v-text-field
                v-model="inputValue"
                density="compact"
                variant="solo"
                :label="placeholder"
                single-line
                hide-details
                elevation="3"
                clearable
                :loading="loading"
            >
                <template v-slot:prepend-inner>
                    <v-icon @click="prependIcon" color="primary" icon="mdi-line-scan"></v-icon>
                </template>
                <template v-slot:append-inner>
                    <v-icon @click="appendIcon" color="primary" icon="mdi-magnify"></v-icon>
                </template>

            </v-text-field>
        </v-card-text>
    </v-card>
</template>
<script>
import { showSuccessToast, showFailToast } from 'vant';
  export default {
    components:{

    },
    emits: ["searchClick"],
    data: () => ({
        loading:false, 
        inputValue:"",  
    }),

    methods: {
        // 头部
        prependIcon(){
            // this.$emit("prependIconClick","1");
        },
        // 尾部
        appendIcon(){
            const _value=(this.inputValue).trim();

            // if(!_value){
            //     showFailToast('111!');
            //     return
            // }
            this.$emit("searchClick",_value);
        },
        // 显示 loading
        showLoading(active=false){
            this.loading=active
        }
    },
    props: {
        // placeholder
        placeholder:{
            type: String,
            default: ()=> "请输入..."
        }, 
    }
  }
</script>