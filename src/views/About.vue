<template>
  <div class="about">
    <h1>This is an about page</h1>
    <testSolt>
      <!-- 这种没有命名的叫做匿名插槽 -->
      <div class="tmpl">
        <span>这是从父组件传到子组件的</span>
      </div>
      <!-- 具名插槽 -->
      <!-- 没有具名的html模板默认关联匿名插槽。 -->
      <!-- 简单的对于匿名和具名插槽理解，其实这就是子组件的一个占位符，从父组件传输值到子组件中，这样就可从父组件中自定义杨样式和内容（一种方式）,
      当然，也可以在子组件里预先定制好样式，但是由于在子组件内只是一个占位符，对占位符进行样式是不生效的，到那时可以在占位符的父元素进
      行样式定制。目前能想象到的应用场景，比如从父组件里传到子组件内的已经定义好的样式的div中，约定好只是传输span等等，而在子组件中就能对
      样式进行预先定制，从父组件插进来的数据就直接有样式了-->
      <div class="temp2" slot="test1">
        <span>这是具名插槽一，文字颜色的效果是在父组件控制的</span>
      </div>
      <div class="temp3" slot="test2">
        <!-- <span>这是具名插槽二，文字颜色的效果是在子组件控制的</span> -->
        <span>{{me}}</span>
      </div>
    </testSolt>
    <child>
      <!-- 作用域插槽：
      我的理解：作用域插槽是子组件传过来的数据，就像父子传值似的，用这种父组件  solt-scopr 和 子组件 v-bind 的方式，传递过来，
      然后父组件拿到了之后，再进行渲染， 再放回去，这样能在父组件中对数据进行样式的渲染来。暂时也没有想到应用场景-->
      <template slot-scope="user">
        <div class="newDiv"  v-for="(item, i) in user.data" :key="i">
          <span>{{item}}</span>
        </div>
      </template>
    </child>
  </div>
</template>
<script>
import testSolt from '../components/test-solt'
import child from '../components/child'

export default {
  components: {
    'testSolt': testSolt,
    'child': child
  },
  data () {
    return {
      me: '这是具名插槽二'
    }
  }
}
</script>
<style lang="scss" scoped>
  .temp2{
    color: antiquewhite
  }
  .newDiv{
    width: 100px;
    height: 100px;
    background-color: antiquewhite
  }
</style>
