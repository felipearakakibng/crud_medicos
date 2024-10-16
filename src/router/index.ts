import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: () => import('../views/DoctorView.vue')
    }
  ]
})

export default router
