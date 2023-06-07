<template>
  <div>
    <h3>这里是父组件</h3>
    <!-- 步骤3：使用子组件 -->

    <!-- 标签对 -->
    <component v-bind:is="selectTab"> </component>

    <select v-model="selectTab">
      <option value="moren">--Please choose an option--</option>
      <option value="ChildA">选择：子组件1</option>
      <option value="ChildB">选择：子组件2</option>
      <option value="ChildC">选择：子组件3</option>
    </select>
    {{ selectTab }}
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// 步骤2-1：导入子组件
import ChildA from './ChildCompA.vue'
import ChildB from './ChildCompB.vue'
import ChildC from './ChildCompC.vue'

export default {
  // 步骤2-2：注册子组件
  components: { ChildA, ChildB, ChildC },
  setup() {
    const state = reactive({
      count: 0,
      selectTab: 'moren'
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>