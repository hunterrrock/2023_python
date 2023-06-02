<template>
  <!-- 侦听对象 -->
  <div>
    <p>侦听属性count：{{ count }}</p>
    <p>侦听属性result：{{ result }}</p>
    <button @click="count += 1">点击后+1</button>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0
    })

    let result = ref(0)
    // watch接收三个参数：
    // 参数1：侦听的对象，该对象可以是一个变量、一个数组、一个对象、一个对象的某一个属性
    // 参数2：是一个回调函数，在回调函数中可以做我们的计算（可以实现computed的功能）了
    // 参数3：是一个配置独享，可以省略；例如：immediate

    // watch跟computed的区别：
    // 1.watch可以做异步操作，因为它不需要return；computed需要return不可以做异步操作
    // 2.watch没有缓存（存储），computed是有存储的。：computed只有当依赖的数据变化时才会计算, 当数据没有变化时, 它会读取缓存数据。
    // 3.watch第一次默认不会调用，computed默认第一次就会调用
    // 4.watch所监听的，可以不参与计算，只要你监听它，它发生变化了，哪怕在回调函数中不将它参与计算也可以；
    // 4.watch还可以得到变更前的值（对象除外），computed不能
    watch(
      state,
      () => {
        // 开始处理业务（例如使用计算）
        console.log('state的count属性的值为：', state.count)
        result.value = state.count + 1
        console.log('调用了这个watch方法')
      },
      { immediate: true }
      // immediate:默认为false，改为true，可以让我们会第一次默认调用；立即调用
    )

    return {
      result,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>