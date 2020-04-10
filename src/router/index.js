import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from "@/views/Films"
import Cinema from "@/views/Cinema"
import Center from "@/views/Center"
import Info from "@/views/Info"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/films',
    component: Films
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
 
  {
    path: '/info',
    component: Info
  },
  {
    path: '/login',
    component:()=>import("@/views/Login")
  },
  {
    path: '/reg',
    component:()=>import("@/views/Reg")
  },
  {
    path: '/',
    redirect:"/films"
  }
  
]

const router = new VueRouter({
  mode:"hash", // 默认采用hash模式
  routes
})


export default router
