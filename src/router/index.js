import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/list',
      name: 'list',
      components: {
        header: () => import('@/components/structure/SearchField.vue'),
        default: () => import('@/views/ListView.vue'),
      },
    },
    {
      path: '/favorites',
      name: 'favorites',
      components: {
        header: () => import('@/components/structure/SearchField.vue'),
        default: () => import('@/views/FavoritesView.vue'),
      },
    },
  ],
})

export default router
