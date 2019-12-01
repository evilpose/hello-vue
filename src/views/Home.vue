<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
  // beforeRouteLeave (to, from, next) {
  //   // 设置下一个路由的 meta
  //   to.meta.keepAlive = true
  //   // B 跳转到 A 时，让 A 缓存，即不刷新
  //   next()
  // }
}
</script>
