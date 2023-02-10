import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/Home.vue')
  },
  {
    path: '/test/form',
    name: 'testForm',
    component: () => import('@/views/test/Form.vue')
  },


  {
    path: '/404',
    name:'404',
    component:()=> import('@/components/404.vue')
  },
  {
    path:'/:pathMatch(.*)',
    redirect: '/404'
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
