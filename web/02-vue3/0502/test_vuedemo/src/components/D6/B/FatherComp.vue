<template>
  <div>
    <h3>这里是父组件</h3>
    <!-- 步骤3：使用子组件 -->
    <!-- 单标签 -->
    <!-- <Child /> -->
    <!-- 标签对 -->
    <Child v-bind:zdy="count" v-bind:cname="name" :clist="listobj"> </Child>
    <button @click="count += 1">点击+1,count的值： {{ count }}</button>
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
      name: '塞尔达',
      listobj: [
        {
          id: 1,
          realName: '林克'
        },
        {
          id: 2,
          realName: '武士'
        }
      ]
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>