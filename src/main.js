import Vue from 'vue'
import App from './App.vue'
import Vee from 'vee-validate'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Vee)
Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
