import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。
// 而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。
// 此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。
// (摘于官网说明) 大概意思应该就是，消息提示的环境配置，设置为开发环境或者生产环境
Vue.config.productionTip = false

// 1.首先需要了解这是 es 6 的语法，表示 Vue 实例选项对象的 render 方法作为一个函数，接受传入的参数 h 函数，返回 h(App) 的函数调用结果。

// 2.其次，Vue 在创建 Vue 实例时，通过调用 render 方法来渲染实例的 DOM 树。

// 3.最后，Vue 在调用 render 方法时，会传入一个 createElement 函数作为参数，也就是这里的 h 的实参是 createElement 函数，然后 createElement 会以 APP 为参数进行调用，关于 createElement 函数的参数说明参见：Element-Arguments
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
