import Vue from 'vue'
import axios from 'axios'
import '../../static/icon/iconfont.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/common.scss' // global css

import App from './App'
import router from './router'
import store from './store'
import SvgIcon from '@/components/svgIcon'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.component('svg-icon', SvgIcon)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
