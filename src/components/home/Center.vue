<template>
    <v-navigation-drawer
        v-model="drawer"
        location="right"
        style="padding: 18px 0px;"
    >
        <!-- <v-list-item
          :prepend-avatar="userImage"
          title="李某某"
        ></v-list-item> -->
        <v-list>
          <v-list-item
            :prepend-avatar="userImage"
            title="John Leider"
            subtitle="john@google.com"
          >
            <!-- <template v-slot:append>
              <v-btn
                size="small"
                variant="text"
                icon="mdi-menu-down"
              ></v-btn>
            </template> -->
          </v-list-item>
        </v-list>

        <v-divider style="padding-bottom:12px;"></v-divider>

        <v-list density="compact" nav>
            <!-- <v-list-item 
                prepend-icon="mdi-view-dashboard" 
                title="Home" 
                value="home"
                active-color="primary"
                rounded="shaped"
            ></v-list-item> -->
            <v-list-item 
                v-for="(item,i) in itemList"
                :key="i"
                :active="false"
                :prepend-icon="item.icon" 
                :title="item.title" 
                :value="item.value"
                active-color="primary"
                rounded="shaped"
                @click="itemHandle(item)"
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
  
<script>
export default {
    data: () => ({ 
        drawer:false,
        userImage: require("@/assets/user.png"),


        itemList:[
            {
                icon:"mdi-send-outline",
                title:"退出登录", 
                value:"out"
            }
        ]
    }),
    watch: {
        'drawer': { 
            handler(value){
                this.$store.dispatch("changeUserCenter", value ) 
            },
        },
        '$store.state.actionsStore.showUserCenter': { 
            handler(value){
                this.drawer=value
            },
            deep: true, 
            immediate: true, 
        },
    },
    methods:{
        open(){
            // this.drawer=true
        },
        itemHandle(option){
            const {value}=option

            switch (value) {
                case "out":
                    localStorage.setItem("_token","")
                    this.$router.push("/login");
                    break;
            
                default:
                    break;
            }

            this.$store.dispatch("changeUserCenter", false ) 

        }
    },
    props: {

    }
}
</script>
  

  