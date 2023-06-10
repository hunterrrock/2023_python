<template>
  <div>
    <h3>这里是子组件</h3>
    <button @click="sendmsg">点击就发送信息给父组件</button>
    <button @click="count += 1">点击就count+1,count的值:{{ count }}</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  // context是一个对象
  // conext :{ emit:()=>{},slots:{},attrs:{} }
  // {emit,slots} ={{},{}}
  setup(props, { emit }) {
    const state = reactive({
      count: 11110,
      name: '塞尔达'
    })

    const sendmsg = () => {
      // 把count变量的值传递给父组件
      console.log('这个方法被调用了')
      emit('zdy', state.count, state.name)
    }

    return {
      sendmsg,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>