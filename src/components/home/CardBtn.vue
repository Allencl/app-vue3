<template>
    <v-hover
        v-slot="{ isHovering, props }"
        close-delay="200"
    >
        <v-card 
            v-bind="props"
            :elevation="isHovering ? 12 : 1"
            :class="{ 'on-hover': isHovering }"
            class="pa-2" 
            outlined 
            tile
            shaped
        >
            <v-row>
                <v-col cols="4 pr-0 pl-0 pt-0 pb-0">
                    <v-icon size="36" :color="colorIcon" :icon="icon"></v-icon>
                </v-col>
                <v-col cols="8 pl-0 pt-0 pb-0 pr-0">
                    <v-card-title class="text-truncate text-right  pl-0 pt-0 pb-0 pr-0" style="position:relative;top:3px">供应商</v-card-title>
                </v-col>
            </v-row>
            
        </v-card>
    </v-hover>
</template>
  
<script>
export default {
    data: () => ({ 
  
    }),
    props: {
        // icon
        icon:{
            type: String,
            default: ()=> "mdi-vuetify"
        },
        colorIcon:{
            type: String,
            default: ()=> "primary"
        }
    }
}
</script>
  

  