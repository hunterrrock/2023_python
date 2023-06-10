<template>
  <div>
    <p>1.采用reactive定义的响应式变量</p>
    <p>{{ count }}</p>
    <p>2.采用ref定义的响应式变量</p>
    <p>{{ num }}</p>
    <p>{{ sex }}</p>
    <p>1.采用computed定义的响应式变量</p>
    <p>{{ dobuleCount }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref, toRefs } from 'vue'

// 三种方式定义响应式变量
// 1.reactive:一般用来定义复杂的变量：对象{count}，数组[10,20,30],对象数组[{},{}]
// 2.ref：一般用来定义简单的变量：10 '张三' null false
// 3.computed
export default {
  setup() {
    // 1.reactive
    const state = reactive({
      count: 2
    })
    // 2.ref
    const num = ref(10000)
    const sex = ref(false)
    sex.value = true

    // 3.computed
    const dobuleCount = computed(() => {
      return state.count * 2
    })

    return {
      sex,
      num,
      dobuleCount,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>