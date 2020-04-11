//引入模块
const express=require("express");
const allRouter=require("./backend/routers/index");
//调用方法生成对象
const app =express();

//借助中间件开启静态资源服务器
app.use(express.static("./")); //以当前目录为站点根目录

//使用allRouter中间件,实现路由
app.use(allRouter);

app.listen(1123,()=>{
    console.log("服务器成功开启,请访问1123端口");
});