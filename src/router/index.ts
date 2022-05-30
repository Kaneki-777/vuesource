/*
 * @Desc:
 * @version:
 * @Date: 2022-05-29 10:38:27
 * @LastEditTime: 2022-05-29 10:43:31
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
