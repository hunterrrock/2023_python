<template>
  <div>
    <h3>这里是子组件</h3>

    <p>这里是子组件从父组件接受到的zdy的值：{{ zdy }}</p>

    <p>这里是子组件从父组件接受到的cname的值：{{ cname }}</p>
    <p>这里是子组件从父组件接受到的clist的值：{{ clist }}</p>
    <ul>
      <li v-for="(obj, index) in clist" :key="index">{{ obj.id }}={{ obj.realName }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  //   props: ['zdy', 'cname', 'clist'],
  props: { zdy: Number, cname: String, clist: Array },
  setup(props, context) {
    // 这个值在setup里面是非响应式值
    console.log('拿到的zdy的值是：', props.zdy)
    // 如果想要在setup里面的值需要响应式？
    // 可以使用计算属性，可以监听props的count变化也跟着变化。。

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