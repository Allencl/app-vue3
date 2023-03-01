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
    path: '/login',
    name: 'login',
    meta:{tittle:"登录"},
    component: () => import('@/components/Login.vue')
  },
  {
    path: '/equipment',
    name: 'equipment',
    meta:{tittle:"设备报修"},
    component: () => import('@/views/equipmentRepairs/index.vue')
  },
  {
    path: '/equipment/repairs',
    name: 'equipmentRepairs',
    meta:{tittle:"设备报修-详情"},
    component: () => import('@/views/equipmentRepairs/repairs.vue')
  },
  {
    path: '/equipment/maintain',
    name: 'equipmentMaintain',
    meta:{tittle:"设备维修"},
    component: () => import('@/views/equipmentMaintain/index.vue')
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
    path: '/test/snackbar',
    name: 'snackBar',
    meta:{tittle:"消息测试页面"},
    component: () => import('@/views/test/Snackbar.vue')
  },
  {
    path: '/test/bi',
    name: 'bi',
    meta:{tittle:"BI-测试页面"},
    component: () => import('@/views/test/BI.vue')
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
