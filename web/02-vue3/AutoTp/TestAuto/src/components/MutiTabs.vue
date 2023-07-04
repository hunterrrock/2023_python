<template>
  <div>
    <!-- 留个插槽位，类似APP.vue 给home的子路由-->
      <RouterView />
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