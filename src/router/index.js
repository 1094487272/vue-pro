import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from "@/views/Films"
import Cinema from "@/views/Cinema"
import Center from "@/views/Center"
import Info from "@/views/Info"
import axios from "axios"

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
    component: Center,
    meta:{
      ispower:true
    }
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

router.beforeEach((to,from,next)=>{
  if(to.meta.ispower){
      let token=localStorage.getItem("token");
      axios.get("http://localhost:1123/users/ver",{
        params:{
          token
        }
      }).then((res)=>{
        if(res.data.type){
          next();
        }else{
          router.push({path:"/login",targetUrl:to.path})
        }
      })
  }else{
    next();
  }
})

export default router