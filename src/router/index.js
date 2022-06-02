import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/posts/Create.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/posts/Edit.vue')
    },
    {
      path: '/KomentarView',
      name: 'KomentarView',
     
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/KomentarView.vue')
    }
  ]
})

export default router
