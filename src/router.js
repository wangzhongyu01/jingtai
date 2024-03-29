import Vue from 'vue'
import VueRouter from 'vue-router'

import index from './components/Index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: index }
  ]
})

export default router
