import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Error from '@/views/Error'
// import CoinDetail from '@/views/CoinDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/coin/:id',
    name: 'coin-detail',
    // component: CoinDetail
    component: () => import(/* webpackChunkName: "coin-detail" */ '@/views/CoinDetail')
  },

  {
    path: '*',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
