<template>
    <span class="layout-home">

        <v-row class="home-card">
            <v-col cols="6">
                <CardBtnComponent 
                    icon="mdi-minus-circle"
                    color-icon="primary"
                />
            </v-col>
            <v-col cols="6">
                <CardBtnComponent 
                    icon="mdi-thumb-down"
                    color-icon="red"
                />
            </v-col>
        </v-row>

        <v-row class="home-card">
            <v-col cols="6">
                <CardBtnComponent />
            </v-col>
            <v-col cols="6">
                <CardBtnComponent />
            </v-col>
        </v-row>

    </span>

</template>
  
<script>
  import CardBtnComponent from '@/components/home/CardBtn.vue'

export default {
    components:{
        CardBtnComponent
    },
    data: () => ({ 

    }),
}
</script>

<style lang="scss">
.layout-home .home-card{
    margin-top: 8px;
    .v-col{padding:0px;}

    >div:nth-child(1){
        padding-right: 4px;
    }
    >div:nth-child(2){
        padding-left: 4px;
    }
}
</style>
  

  