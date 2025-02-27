import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/pages/signup.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/pages/services.vue'),
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import('@/pages/navbar.vue'),
  },
  {
    path: '/metrics',
    name: 'metrics',
    component: () => import('@/pages/key_metrics.vue'),
  }
]

let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})

export default router
