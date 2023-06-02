<template>
  <!-- 计算属性：computed()函数 -->
  <div>
    年收入： <input type="text" v-model="income" />

    <p>我的个人所得税： {{ gs }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      //   年收入
      income: 300000
    })

    //个税
    // computed是一个计算属性，它有一个函数作为参数，它必须有return返回值，计算属性的值是只读的，不能更改
    // 默认第一次就会调用
    // 它返回的这个值，是一个响应式变量，该响应式变量是只读的
    // 如果不是响应式，我们改变了输入，它不会随之更新
    //  它里面的响应式变量（被监听，如下：state.income）改变了，就会自动调用（当state.income改变了，会自动调用computed的
    const gs = computed(() => {
      let base = state.income - 60000
      let tax = 0
      if (base <= 0) {
        tax = 0
      } else if (base < 36000) {
        tax = base * 0.03
      } else if (36000 < base < 144000) {
        tax = base * 0.03 + (state.income - 36000) * 0.1
      }
      return tax
    })

    return {
      gs,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>