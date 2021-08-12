import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Echart from 'echarts';
import * as Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
Vue.config.productionTip = false
Vue.prototype.$echarts = Echart;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
