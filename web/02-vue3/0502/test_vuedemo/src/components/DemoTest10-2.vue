<template>
  <!-- 侦听数组 -->
  <div>
    <p>侦听属性num1：{{ num1 }}</p>
    <p>侦听属性num2：{{ num2 }}</p>
    <p>侦听属性result：{{ result }}</p>
    <button @click="num1 += 1">点击后num1+1</button>
    <button @click="num2 += 1">点击后num2+1</button>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0
    })

    let num1 = ref(10)
    let num2 = ref(20)
    let result = ref(0)

    watch(
      // 只要数组中的其中一个变了,它都会监听到
      [num1, num2],
      () => {
        // 开始处理业务（例如使用计算）
        result.value = num1.value + num2.value
        console.log('调用了这个watch方法')
      },
      { immediate: true }
      // immediate:默认为false，改为true，可以让我们会第一次默认调用；立即调用
    )

    return {
      result,
      num1,
      num2,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>