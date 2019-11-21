<template>
    <div class="child">
    <h3>这里是子组件</h3>
    <!--  作用域插槽 -->
    <slot  :data="data"></slot>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      data: ['zhangsan', 'lisi', 'wanwu', 'zhaoliu', 'tianqi', 'xiaoba']
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
