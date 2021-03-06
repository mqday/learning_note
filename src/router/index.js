import Vue from 'vue'
import Router from 'vue-router'
import stateCode from '@/components/stateCode'
import index from '@/components/index'
import htmlText from '@/components/html'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI)

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
    path: '/htmlText',
    name: 'htmlText',
    component: htmlText
  }]
})
