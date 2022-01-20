import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from './pages/Home.vue'
import Ticker from './pages/Ticker.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ticker',
    name: 'Ticker',
    component: Ticker,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
