<template>
    <span>
        <!-- <AppBarPage /> -->
        <!-- <span>111</span> -->
  
        <div class="layout-container">
            <router-view/>
        </div>

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
        <BottomNavigationPage />
    </span>
  </template>
  <script>
  
  import AppBarPage from '@/components/AppBar.vue'
  import BottomNavigationPage from '@/components/BottomNavigation.vue'
  
  export default {
    components:{
      AppBarPage,
      BottomNavigationPage
    },
    data:()=>({ 
  
    }),
    created(){
  
    },
    methods:{
  
  
  
    }
  }
  </script>

  