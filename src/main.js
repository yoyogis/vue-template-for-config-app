import Vue from 'vue'
import App from './App.vue'
import router from './router'
import functions from './functions'

////CONFIG-START
import iview from 'iview'
import 'iview/dist/styles/iview.css';
Vue.use(iview)

////CONFIG-END

Vue.config.productionTip = false
Vue.use(functions)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
