import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'    // 移动端30ms延迟

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.axios = axios;

FastClick.attach(document.body);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
