<template>
  <!-- 侦听变量 -->
  <div>
    <p>侦听属性num1：{{ num1 }}</p>
    <p>侦听属性result：{{ result }}</p>
    <button @click="num1 += 1">点击后num1+1</button>
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
    let result = ref(0)

    watch(
      num1,
      () => {
        // 开始处理业务（例如使用计算）
        result.value = num1.value + 1
        console.log('调用了这个watch方法')
      },
      { immediate: true }
      // immediate:默认为false，改为true，可以让我们会第一次默认调用；立即调用
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