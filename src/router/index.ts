import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'doctors',
      component: () => import('../views/DoctorIndexView.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/DoctorCreateView.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/DoctorEditView.vue')
    }
  ]
})

export default router
