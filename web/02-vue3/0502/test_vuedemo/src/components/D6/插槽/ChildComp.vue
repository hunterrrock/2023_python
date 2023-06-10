<template>
  <div>
    <!-- 在子组件中留插槽位 -->
    <!-- 不具名插槽 -->
    <h3>这里是 <slot></slot> 子组件</h3>

    <!-- 具名插槽 -->
        <h3>这里是具名插槽 <slot name='mayun'></slot> 子组件</h3>
        <h3>这里是具名插槽 2<slot name='tem'></slot> 子组件2</h3>
    


  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>