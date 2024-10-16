import { createMemoryHistory, createRouter } from 'vue-router'

import LoginView from './views/LoginView.vue'
import DoctorView from './LoginView/DoctorView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/doctors', component: DoctorView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
