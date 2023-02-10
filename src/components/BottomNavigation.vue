<template>
    <v-bottom-navigation
        v-model="value"
        color="primary"
        elevation="3"
    >
        <v-btn value="1">
            <v-icon>mdi-history</v-icon>
            Recent
        </v-btn>

        <v-btn value="2">
            <v-icon>mdi-home</v-icon>
            首页
        </v-btn>

        <v-btn value="3">
            <v-icon>mdi-map-marker</v-icon>

            Nearby
        </v-btn>
    </v-bottom-navigation>
</template>
  
<script>
export default {
    data: () => ({ 
        value: '2' 
    }),
}
</script>
  

  