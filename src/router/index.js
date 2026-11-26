import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/emp',
    name: 'emp',
    component: () => import('../views/Employee_crud.vue'),
     meta: { requiresAuth: true }     // ✅ บังคับ login
  },
  {
    path: '/login',
    name: '/login',
    
    component: () => import('..//views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
