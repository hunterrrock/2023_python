import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // 子路由
      children:[
        {
          path: '/Cases',
          name: 'Cases',
          component: () => import('../views/ApiAuto/Cases.vue')
        },
        {
          path: '/Requests',
          name: 'Requests',
          component: () => import('../views/ApiAuto/Requests.vue')
        },
        {
          path: '/Plans',
          name: 'Plans',
          component: () => import('../views/ApiAuto/Plans.vue')
        },
        {
          path: '/Reports',
          name: 'Reports',
          component: () => import('../views/ApiAuto/Reports.vue')
        }

      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    }
  ]
})

export default router
