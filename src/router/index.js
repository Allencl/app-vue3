import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta:{tittle:"首页"},
    component: () => import('@/components/Home.vue')
  },
  {
    path: '/test/form',
    name: 'testForm',
    meta:{tittle:"表单测试页面"},
    component: () => import('@/views/test/Form.vue')
  },
  {
    path: '/test/date',
    name: 'testDate',
    meta:{tittle:"日期测试页面"},
    component: () => import('@/views/test/Date.vue')
  },



  {
    path: '/404',
    name:'404',
    meta:{tittle:"页面丢失了"},
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
