<template>
  <div>
    <h1>注册页</h1>
    <van-field v-model.trim="username" type="text" label="用户名" @blur="checkname" />
    <span>{{msg}}</span>
    <van-field v-model.trim="password" type="password" label="密 码" />
    <van-button type="danger" size="large" @click="reg">注册</van-button>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import {mapMutations} from "vuex"
import { Field, Button ,Toast } from "vant";
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
export default {
  data() {
    return {
      username: "",
      password: "",
      msg: "",
      isok: false
    };
  },
  methods: {
    ...mapMutations(["hide","show"]),
    checkname() {
      if (this.username === "") {
        Toast('请输入用户名!!!!');
      }
      axios
        .get("api/users/checkname", {
          params: {
            name: this.username
          }
        })
        .then(res => {
          // console.log(res)
          if (res.data.type) {
            this.isok = true;
            this.msg = res.data.msg;
          } else {
            this.isok = false;
            this.msg = res.data.msg;
          }
        });
    },
    reg() {
      if (this.password === "") {
        Toast('请输入密码');
        return;
      }
      if (this.isok) {
        axios
          .post("api/users/reg", {
            name: this.username,
            password: this.password
          })
          .then(res => {
            // console.log(res);
            Toast(res.data.msg);
            if(res.data.type){
                this.$router.push({path:"/login",query:{name:this.username}})
            }
            
          });
      }else{
        Toast('请完善信息');
      }
    }
  },
  created(){
    this.hide();
  },
  destroyed(){  //销毁阶段的钩子函数
    this.show();
  }
};
</script>
<style lang='scss' scoped>
</style>