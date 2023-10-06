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
      path: '/TodoList',
      name: 'TodoList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/EditTodo.vue')
    },
    {
      path: '/:catchAll(.*)', // atau `:pathMatch(.*)*`
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
   },
  ]
})

export default router
