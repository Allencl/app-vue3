<template>
  <v-app>
    <LayoutPage />
  </v-app>
</template>
<script>

import LayoutPage from '@/components/Layout.vue'

export default {
  components:{
    LayoutPage
  },
  data:()=>({ 

  }),
  created(){

  },
  methods:{



  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.layout-container{
  padding: 72px 6px 50px 6px;
}
.v-row{
  margin: 0px;
}
</style>
