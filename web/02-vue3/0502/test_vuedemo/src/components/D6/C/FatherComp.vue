<template>
  <div>
    <h3>这里是父组件,'count的值是'{{ count }},'name'{{ name }}</h3>
    <!-- 步骤3：使用子组件 -->
    <!-- 子组件引用 -->
    <Child @zdy="getData"> </Child>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// 步骤2-1：导入子组件
import Child from './ChildComp.vue'

export default {
  // 步骤2-2：注册子组件
  components: { Child },
  setup() {
    const state = reactive({
      count: 0,
      name: ''
    })

    const getData = (data, name) => {
      console.log('调用了,子组件传过来的count值为', data)
      console.log('调用了,子组件传过来的name值为', name)
      state.count = data
      state.name = name
    }

    return {
      getData,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>