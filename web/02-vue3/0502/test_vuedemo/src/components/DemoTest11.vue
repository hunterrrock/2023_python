<template>
  <!-- watchEffect :effect增强,加强的意思-->
  <div>
    <p>侦听属性num1：{{ num1 }}</p>
    <p>侦听属性result：{{ result }}</p>
    <button @click="num1 += 1">点击后num1+1</button>
    <button @click="count += 1">点击后count+1</button>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0
    })

    let num1 = ref(10)
    let result = ref(0)

    watchEffect(
      // 只需要一个回调函数作为她的参数,监听的需要放在肚子里
      // 特点:会自动监听收集(例如num1在肚子里用到了,他就会自动监听)
      // 默认第一次会自动调用
      // 可以监听多个,如num1和state.count
      () => {
        // 开始处理业务（例如使用计算）
        result.value = num1.value + state.count
        console.log('调用了这个watch方法')
      }
    )

    return {
      result,
      num1,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>