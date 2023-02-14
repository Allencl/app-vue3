<template>
    <span>
        <AppBarPage>
            <template v-slot:appTabs>
                <v-tabs align-with-title>
                    <v-tab>Tab 1</v-tab>
                    <v-tab>Tab 2</v-tab>
                    <v-tab>Tab 3</v-tab>
                </v-tabs> 
            </template>
        </AppBarPage>
        <div style="height: 70px;"></div>

        <v-btn elevation="2" @click="aaa">按钮111</v-btn>
        <v-btn elevation="2">按钮222</v-btn>
        <v-btn elevation="2">按钮333</v-btn>
        <v-btn elevation="2">按钮444</v-btn>
        <v-btn elevation="2">按钮555</v-btn>

    </span>
</template>
<script>
    import AppBarPage from '@/components/AppBar.vue'

  export default {
    components:{
        AppBarPage
    },
    data: () => ({

    }),

    methods: {
        aaa(){
            console.log( this )
            console.log("8987")
        }
    },
  }
</script>