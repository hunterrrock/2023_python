<template>
  <div>
    <!-- v-on指令 -->
    <!-- 用于绑定事件，缩写是@ -->
    <h1>1.执行js代码</h1>
    <button v-on:click="count += 1">点击了:{{ count }}次</button>
    <h1>2.执行事件方法</h1>
    <button @click="add">点击了:{{ count }}次</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0
    })
    // 自定义事件方法
    const add = () => {
      state.count = state.count + 1
    }
    return {
      add,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>