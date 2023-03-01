
export default {
    state: {
        showLodding:false,  // 显示 lodding
        bufferLoginMessage:{},   // 缓存登录信息
        showUserCenter:false,   // show right drawer
    },
    mutations: {
		/**
		 * change user Center show right drawer
		*/
        changeUserCenter:function(state,active){
            state.showUserCenter=active;
		},
        // 缓存登录信息  
        bufferLoginMessageStore:function(state,option){
            state.bufferLoginMessage=option;
		},
        // 切换 lodding  
        changeGlobalLodding:function(state,active){
            state.showLodding=active;
        },
    },
    actions: {
        changeUserCenter:function(context,active) {
            context.commit('changeUserCenter',active)
        },
        bufferLoginMessageStore:function(context,option) {
            context.commit('bufferLoginMessageStore',option)
        },
        changeGlobalLodding:function(context,active) {
            context.commit('changeGlobalLodding',active)
        },
    }
}
