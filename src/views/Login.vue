<template>
  <div class="login">
    <h1>登录页</h1>
    <van-field v-model.trim="username" type="text" label="用户名" />
    <van-field v-model.trim="password" type="password" label="密 码" />
    <input type="checkbox" v-model="keep" />七天免登陆
    <br />
    <p @click="toReg">注册账号</p>
    <van-button type="danger" size="large" @click="login">登录</van-button>
  </div>
</template>
<script>
import axios from "axios"
import Vue from "vue";
import {mapMutations} from "vuex"
import { Field , Button , Toast} from "vant";
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
export default {
    data(){
        return{
            username:this.$route.query.name,
            password:"",
            keep:true
        }
    },
    mounted(){
        // console.log(this.$route)
    },
    methods:{
        ...mapMutations(["hide","show"]),
        login(){
            axios.get("api/users/login",{
                params:{
                    name:this.username,
                    password:this.password,
                    keep:this.keep
                }
            }).then((res)=>{
                // console.log(res)
                if(res.data.type){
                    Toast(res.data.msg);
                    localStorage.setItem("username",res.data.name);
                    localStorage.setItem("token",res.data.token);
                    this.$router.push("/center")
                }else{
                    Toast(res.data.msg);
                }
            })
        },
        toReg(){
            this.$router.push("/reg");
        }
    },
    created(){
        this.hide();
    },
    destroyed(){
        this.show();
    }
};
</script>
<style lang='scss' scoped>
</style>