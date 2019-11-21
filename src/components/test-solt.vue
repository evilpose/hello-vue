<template>
    <div class="child">
        <h3>这里是子组件</h3>
        <div class="myStyle">
            <slot name="test2"></slot>
        </div>
        <slot></slot>
        <slot name="test1"></slot>
    </div>
</template>
<script>
export default {
  name: 'testSolt'
}
</script>
<style lang="scss" scoped>
 .child{
    font-size: 30px
 }
 .myStyle span{
    color:blue
 }
</style>
