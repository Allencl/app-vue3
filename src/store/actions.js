
export default {
    state: {
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
    },
    actions: {
        changeUserCenter:function(context,active) {
            context.commit('changeUserCenter',active)
        },
        bufferLoginMessageStore:function(context,option) {
            context.commit('bufferLoginMessageStore',option)
        },
    }
}
