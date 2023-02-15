
export default {
    state: {
        showUserCenter:false,   // show right drawer
    },
    mutations: {
		/**
		 * change user Center show right drawer
		*/
        changeUserCenter:function(state,active){
            state.showUserCenter=active;
		},
    },
    actions: {
        changeUserCenter:function(context,active) {
            context.commit('changeUserCenter',active)
        },
    }
}
