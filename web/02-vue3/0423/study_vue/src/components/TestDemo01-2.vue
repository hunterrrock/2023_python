<template>
  <div>
    <!-- 事件对象 -->
    <h1>事件对象</h1>
    <!-- 在触发DOM 上的某个事件时，会产生一个事件对象（Event Object），
    这个对象中包含着所有与事件有关的属性和方法。 该对象会作为第一个参数传递给监听函数。 -->
    <input type="text" name="name" id="id1" zidingyideshuxing="1234" @input="inputHandle" />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0
    })
    const inputHandle = () => {
      console.log('调用了')
      console.log('我输入的值是：')
      console.log('元素的ID值是：')
      console.log('元素的name值是：')
      console.log('元素的自定义属性值是：')

    }

    return {
      inputHandle,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>