import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const layout = require('@/components/layout').default;

export default new Router({
  routes: [{
    path: '/',
    name: 'index-page',
    component: layout,
    redirect: 'index',
    children: [{
      path: 'index',
      component: require('@/views/index').default,
      name: 'index'
    }]
  }]
})