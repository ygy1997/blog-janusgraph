import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'    // 移动端30ms延迟
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.axios = axios;

FastClick.attach(document.body);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
