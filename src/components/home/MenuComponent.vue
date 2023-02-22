<template>
    <v-navigation-drawer
        v-model="drawer"
        location="bottom"
        class="home-menu-drawer"
        temporary
        @update:modelValue="updateDrawerValue"
    >

        <v-list>
            <v-list-subheader>{{ title }} 
                <v-chip
                    class="ma-2"
                    color="primary"
                    size="small"
                >
                   {{ items.length }}
                </v-chip>
            </v-list-subheader>
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :value="item"
                active-color="primary"
                rounded="shaped"
                @click="clickItem(item)"
            >
                <template v-slot:prepend>
                    <v-icon :color="item.color" :icon="item.icon"></v-icon>
                </template>

                <v-list-item-title v-text="item.text"></v-list-item-title>
        
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
  
<script>
export default {
    data: () => ({ 
        drawer:false,
        title:"",

        items: [],
    }),
    methods:{
        showDrawer:function(title,items){
            this.title=title;
            this.items=items;

            this.$nextTick(()=>{
                this.drawer=true;
            });
        },
        clickItem:function(item){
            this.drawer=false;

            if(!item.path){
                return;
            }
            this.$router.push(item.path);

        },
        updateDrawerValue:function(active){
            if(!active){
                this.title="";
                this.items=[];
            }
        }
    },
    props: {
        // icon

    }
}
</script>
<style lang="scss">
.home-menu-drawer{
    padding: 12px 8px 8px 12px;
}
</style>

  