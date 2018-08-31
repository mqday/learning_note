import Vue from 'vue'
import Router from 'vue-router'
import stateCode from '@/components/stateCode'
import index from '@/components/index'
import html from '@/components/html'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/stateCode',
    name: 'stateCode',
    component: stateCode
  }, {
    path: '/html',
    name: 'html',
    component: html
  }]
})
