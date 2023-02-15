<template>
    <span>
        <!-- <AppBarPage /> -->
        <!-- <span>111</span> -->
  
        <div class="layout-container">
            <router-view/>
        </div>

        <CenterComponent 
            ref="center"
            v-if="showBottomNavigation"
        />

            <!-- <v-sheet
            class="p-12"
        >
            <router-view/>
        </v-sheet> -->

            <!-- <v-sheet
            class="overflow-y-auto"
            >
            <v-container>
                <v-row justify="space-around">
                <router-view/>
                </v-row>
            </v-container>
            </v-sheet> -->
            <!-- <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
            </nav> -->
        <BottomNavigationPage v-if="showBottomNavigation" />
    </span>
  </template>
<script>
    import CenterComponent from '@/components/home/Center.vue'
    import AppBarPage from '@/components/AppBar.vue'
    import BottomNavigationPage from '@/components/BottomNavigation.vue'
  
  export default {
    components:{
      AppBarPage,
      BottomNavigationPage,
      CenterComponent
    },
    data:()=>({ 
        showBottomNavigation:false
    }),
    watch: {
        '$store.state.actionsStore.showUserCenter': { 
            handler(value){
                if(value) {
                    this.$nextTick(()=>{
                        this.$refs.center.open()
                    })
                }
            },
            deep: true, 
            immediate: true, 
        },
        $route: { 
            handler(to){
                const {path}=to;

                if( ['/','/login'].includes(path) ){
                    this.showBottomNavigation=false
                }else{
                    this.showBottomNavigation=true
                }
            },
            deep: true, 
            immediate: true, 
        }
    },
    created(){
  
    },
    methods:{
  
  
  
    }
  }
  </script>

  