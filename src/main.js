import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import VueAxios from "vue-axios"
import 'amfe-flexible/index.js'
import 'amfe-flexible'


// Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueAxios,axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



store.dispatch("getData",{$http: axios})
