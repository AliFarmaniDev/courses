import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: () => import('@/views/LessonView.vue'),
    },
    {
      path: '/find-tutors',
      name: 'finde tutors',
      component: () => import('@/views/FindTutorsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    // register pages
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/singup',
      name: 'singup',
      component: () => import('@/views/SingupView.vue'),
    },
  ],
})

export default router
