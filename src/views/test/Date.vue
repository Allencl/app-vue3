<template>
    <span>
        <AppBarPage />
        
        <v-row justify="center">

            <v-row justify="center">
                <v-date-picker v-model="picker"></v-date-picker>
            </v-row>
            <v-text-field
            label="Label Text"
            model-value="12:30:00"
            type="time"
            suffix="PST"
            ></v-text-field>

            <v-text-field label="Label" type="date"></v-text-field>
        </v-row>
    </span>
  </template>
  <script>
    import AppBarPage from '@/components/AppBar.vue'

  export default {
    components:{
        AppBarPage
    },
    data: () => ({
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }),

    methods: {

    },
  }
</script>