import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuePageTransition from 'vue-page-transition'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

Vue.use(VuePageTransition);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
