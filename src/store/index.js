import { createStore } from 'vuex'

import actionsModule from './actions'

export default createStore({
  modules: {
    actionsStore: actionsModule,
  }
})
