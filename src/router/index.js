import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
    // meta: { keepAlive: false }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // meta: { keepAlive: false }
  },
  {
    path: '/page3',
    name: 'page3',
    component: () => import('../views/page3.vue')
    // meta: { keepAlive: false }
  }
]

const router = new VueRouter({
  routes
})

export default router
