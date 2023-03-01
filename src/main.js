import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueApexCharts from "vue3-apexcharts"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


// vant
import vant from 'vant';
import 'vant/lib/index.css';


// style
import '@/styles/index.scss'
import '@/styles/variables.scss'


// theme
const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    primary: '#4CAF50',
  }
}

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      }
    }
  })

createApp(App)
.use(store)
.use(router)
.use(vuetify)
.use(vant)
.use(VueApexCharts)
.mount('#app')
