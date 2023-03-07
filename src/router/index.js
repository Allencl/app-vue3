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
    path: '/equipment/maintain/detail',
    name: 'equipmentMaintainDetail',
    meta:{tittle:"设备维修-详情"},
    component: () => import('@/views/equipmentMaintain/detail.vue')
  },
  {
    path: '/equipment/maintain/experience',
    name: 'equipmentMaintainExperience',
    meta:{tittle:"维修经验查看"},
    component: () => import('@/views/equipmentMaintain/experience.vue')
  },
  {
    path: '/equipment/maintain/experienceDetail',
    name: 'equipmentMaintainExperienceDetail',
    meta:{tittle:"维修经验详情"},
    component: () => import('@/views/equipmentMaintain/experienceDetail.vue')
  },
  {
    path: '/equipment/maintain/experienceEdit',
    name: 'equipmentMaintainExperienceEdit',
    meta:{tittle:"维修经验填写"},
    component: () => import('@/views/equipmentMaintain/experienceEdit.vue')
  },
  {
    path: '/equipment/equipmentAffirm',
    name: 'equipmentAffirm',
    meta:{tittle:"维修确认"},
    component: () => import('@/views/equipmentAffirm/index.vue')
  },
  {
    path: '/equipmentAffirm/detail',
    name: 'equipmentAffirmDetail',
    meta:{tittle:"发表评价"},
    component: () => import('@/views/equipmentAffirm/detail.vue')
  },
  {
    path: '/equipmentMessage',
    name: 'equipmentMessage',
    meta:{tittle:"维修历史信息"},
    component: () => import('@/views/equipmentMessage/index.vue')
  },
  {
    path: '/equipmentMessage',
    name: 'equipmentMessage',
    meta:{tittle:"维修历史信息"},
    component: () => import('@/views/equipmentMessage/index.vue')
  },
  {
    path: '/equipmentMessage/detail',
    name: 'equipmentMessageDetail',
    meta:{tittle:"维修经验填写"},
    component: () => import('@/views/equipmentMessage/detail.vue')
  },

  {
    path: '/maintain/index',
    name: 'maintainIndex',
    meta:{tittle:"设备保养"},
    component: () => import('@/views/maintain/index.vue')
  },
  {
    path: '/maintain/detail',
    name: 'maintainDetail',
    meta:{tittle:"实施报工"},
    component: () => import('@/views/maintain/detail.vue')
  },
  {
    path: '/maintain/add',
    name: 'maintainAdd',
    meta:{tittle:"工时添加"},
    component: () => import('@/views/maintain/add.vue')
  },
  {
    path: '/maintainMessage/index',
    name: 'maintainMessageIndex',
    meta:{tittle:"保养历史信息"},
    component: () => import('@/views/maintainMessage/index.vue')
  },
  {
    path: '/maintainMessage/detail',
    name: 'maintainMessageDetail',
    meta:{tittle:"工时信息"},
    component: () => import('@/views/maintainMessage/detail.vue')
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
