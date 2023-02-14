<template>
    <v-bottom-navigation
        v-model="value"
        color="primary"
        elevation="3"
    >
        <v-btn value="/aaa" @click="pathPush('/aaa')">
            <v-icon>mdi-arrow-u-left-bottom</v-icon>
            返回
        </v-btn>

        <v-btn value="/home" @click="pathPush('/home')">
            <v-icon>mdi-home</v-icon>
            首页
        </v-btn>

        <v-btn value="/bbb" @click="pathPush('/bbb')">
            <v-icon>mdi-map-marker</v-icon>
            个人中心
        </v-btn>
    </v-bottom-navigation>
</template>
  
<script>
export default {
    data: () => ({ 
        value: '' 
    }),
    watch: {
        $route: { 
            handler(to){
                const {fullPath}=to;
                this.value=fullPath;
            },
            deep: true, 
            immediate: true, 
        }
    },
    methods:{
        pathPush:function(path){
            this.$router.push(path);
        }
    }
}
</script>
  

  