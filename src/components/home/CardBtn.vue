<template>
    <v-hover
        v-slot="{ isHovering, props }"
        close-delay="200"
    >
        <v-card 
            v-bind="props"
            :elevation="isHovering ? 12 : 1"
            :class="{ 'on-hover': isHovering }"
            class="pa-2" 
            outlined 
            tile
            shaped
            @click="btnClick"
        >
            <v-row>
                <v-col cols="4 pr-0 pl-0 pt-0 pb-0">
                    <v-icon size="24" :color="colorIcon" :icon="icon" style="position: relative;top:4px"></v-icon>
                </v-col>
                <v-col cols="8 pl-0 pt-0 pb-0 pr-0">
                    <v-card-title style="font-size:15px;" class="text-truncate text-right  pl-0 pt-0 pb-0 pr-0">{{title}}</v-card-title>
                </v-col>
            </v-row>
            
        </v-card>
    </v-hover>
</template>
  
<script>
export default {
    data: () => ({ 
  
    }),
    emits: ["clickCard"],
    methods:{
        /**
         * 点击菜单
         */
        btnClick:function(){
            this.$emit("clickCard",this.name,this.title);
        }
    },
    props: {
        // title
        title:{
            type: String,
            default: ()=> ""
        },  
        // name
        name:{
            type: String,
            default: ()=> ""
        },   
        // icon
        icon:{
            type: String,
            default: ()=> "mdi-vuetify"
        },
        colorIcon:{
            type: String,
            default: ()=> "primary"
        }
    }
}
</script>
  

  