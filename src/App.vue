<template>
  <div id="app">
    <nav class="nav" v-show="isshow">
      <ul>
        <router-link 
          v-for="nav in navlist"
          :key="nav.id"
          :to="nav.path"
          tag="li"
          active-class="active"
        >{{nav.title}}</router-link>
      </ul>
    </nav>
  
   <router-view></router-view>
  </div>
</template>
<script>
import {mapState} from "vuex"
import axios from "axios"
export default {
  data() {
    return {
      navlist:[
        {id:1,title:"电影",path:"/films"},
        {id:2,title:"影院",path:"/cinema"},
        {id:3,title:"资讯",path:"/info"},
        {id:4,title:"个人",path:"/center"}
      ]
    }
  },
  computed:{
    ...mapState(["isshow"])
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
ul,ol,li{
  list-style: none;
}
.active{
  color: orange;
}
  .nav{
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    ul{
      display: flex;
      li{
      flex: 1;
      line-height: 40px;
      text-align: center;
    }
    }
    
  }
</style>

