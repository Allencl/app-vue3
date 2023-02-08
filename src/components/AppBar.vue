<template>
    <v-app-bar
        color="primary"
        :image="barBgImage"
    >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-app-bar-title>Photos</v-app-bar-title>
        </template>

        <template v-slot:append>
            <v-btn icon="mdi-dots-vertical"></v-btn>
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
    data: () => ({ 
        barBgImage: require("@/assets/app-bar-bg.jpg")
    }),
}
</script>
  

  