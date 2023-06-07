<template>
  <div>{{ count2 }}</div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'

export default {
  setup() {
    // 注意state里面的属性，是普通的没有响应式的；有响应式的是state本身，但是return里的toRefs就将这些属性都变为响应式了
    const state = reactive({
      count: 0
    })

    const add = () => {
      state.count += 1
    }
    setInterval(add, 1000)

    const count2 = toRef(state, 'count')

    return {
      // toRefs的作用就是，把state这个对象里的属性可以在页面上直接使用，不用对象.属性来调用，同时使他变成响应式变量
      // ...toRefs(state)
      // toRef 对单个的属性进行转换的
      count2
    }
  }
}
</script>

<style lang="scss" scoped>
</style>