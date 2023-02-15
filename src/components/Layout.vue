<template>
    <span>
        <!-- <AppBarPage /> -->
        <!-- <span>111</span> -->
  
        <div class="layout-container">
            <router-view/>
        </div>

        <CenterComponent 
            v-if="showBottomNavigation"
        />


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

  