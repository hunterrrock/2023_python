<template>
  <!-- 侦听对象的某一个属性      ()=>state.count,
 -->
  <div>
    <p>侦听属性count：{{ count }}</p>
    <p>侦听属性result：{{ result }}</p>
    <button @click="count += 1">点击后num1+1</button>
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
      () => state.count,
      () => {
        // 开始处理业务（例如使用计算）
        result.value = state.count + 1
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