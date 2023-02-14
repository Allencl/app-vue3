<template>
    <span>

        <v-btn elevation="2" @click="aaa">按钮111</v-btn>
        <v-btn elevation="2">按钮222</v-btn>
        <v-btn elevation="2">按钮333</v-btn>
        <v-btn elevation="2">按钮444</v-btn>
        <v-btn elevation="2">按钮555</v-btn>

    </span>
</template>
<script>
  export default {
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