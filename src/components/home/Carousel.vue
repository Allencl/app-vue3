<template>
    <v-carousel
        cycle
        :interval="5000"
        :show-arrows="false"
        height="180"
        delimiter-icon="mdi-square"
        hide-delimiter-background
    >
        <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
        >
            <v-sheet
                color="#fff"
                height="100%"
                tile
            >
            <div class="d-flex fill-height justify-center align-center">
                <div class="text-h2">
                {{ slide }} Slide
                </div>
            </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>
  
<script>
export default {
    data: () => ({ 
        colors: [
          '#fff',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
    }),
    methods:{

    },
    props: {


    }
}
</script>
  

  