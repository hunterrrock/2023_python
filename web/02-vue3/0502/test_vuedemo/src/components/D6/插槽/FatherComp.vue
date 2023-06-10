<template>
  <div>
    <h3>这里是父组件</h3>
    <!-- 步骤3：使用子组件 -->

    <!-- 在父组件中加入内容 -->
    <!-- 标签对 -->
    <Child>
      阿里巴巴

      <!-- 具名插槽的使用：  #插槽的名称 -->
      <template #mayun>
        <div>MaYun123!@#</div>
      </template>
      <template v-slot:tem>
        <div>插入了一个template</div>
      </template>
    </Child>
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