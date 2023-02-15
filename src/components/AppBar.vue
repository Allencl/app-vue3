<template>
    <v-app-bar
        color="primary"
        dense
        elevation="4"
        :image="barBgImage"
    >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
            <v-btn icon="mdi-chevron-left" @click="backBarIcon"></v-btn>
            <v-app-bar-title style="font-size:16px;">{{ text }}</v-app-bar-title>
        </template>

        <template v-slot:append>

            <v-btn class="text-none" stacked>
                <v-badge content="12" color="error">
                    <v-icon>mdi-bell-outline</v-icon>
                </v-badge>
            </v-btn>

            <v-btn icon="mdi-dots-vertical" @click="showUserCenterHandle"></v-btn>
        </template>

        <template v-if="$slots.appTabs" v-slot:extension>
            <slot name="appTabs"></slot>
        </template>

        <!-- <template v-slot:extension>
            <v-tabs align-with-title>
            <v-tab>Tab 1</v-tab>
            <v-tab>Tab 2</v-tab>
            <v-tab>Tab 3</v-tab>
            </v-tabs> 
        </template> -->




    </v-app-bar>
</template>
  
<script>

export default {
    components:{
        
    },
    data: () => ({ 
        text:"",
        barBgImage: require("@/assets/app-bar-bg.jpg")
    }),
    watch: {
        $route: { 
            handler(to){
                const {meta={}}=to;
                this.text=meta.tittle||"";
            },
            deep: true, 
            immediate: true, 
        }
    },
    created(){

    },
    methods:{
        backBarIcon(){
            const {path}= this.$route

            if(path=="/home") return
            this.$router.go(-1)
        },
        showUserCenterHandle(){
            this.$store.dispatch("changeUserCenter",false) 
            this.$nextTick(()=>{
                this.$store.dispatch("changeUserCenter",true) 
            })

        }
    }
}
</script>
  

  