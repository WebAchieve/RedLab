import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import scrollMagic from './directives/scrollMagic'



Vue.directive('scrollmagic',scrollMagic);
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
