import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 启动页面重定向到/main
    {
      path: '/',
      redirect: '/main'
    },
    {
      path:'/main',
      name:'main',
      component: () => import('../views/MainView.vue')
    },
    {
      path:'/User',
      name:'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path:'/System',
      name:'system',
      component: () => import('../views/SystemView.vue')
    },
    {
      path:'/Report',
      name:'report',
      component: () => import('../views/ReportView.vue')
    },
    {
      path:'/Appoint',
      name:'appoint',
      component: () => import('../views/AppointView.vue')
    },
    {
      path:'/Knowledge',
      name:'knowledge',
      component: () => import('../views/KnowledgeView.vue')
    }
  ]
})

export default router
