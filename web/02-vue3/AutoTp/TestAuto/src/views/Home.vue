<template>
  <!-- 使用子组件 -->
  <div><layout></layout></div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// 导入子组件
import Layout from '@/components/Layout.vue'
export default {
  components: { Layout },
  setup() {
    // 注册子组件
    components: {
      Layout
    }
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