<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>


<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    // 第一阶段：创建
    // console.log('1-2.setup()函数自动执行调用了！相当于VUE2的(BeforeCreate、Created)')
    const state = reactive({
      count: 0
    })

    // // 第二阶段：挂载:组件被挂在到index.html上

    // onBeforeMount(() => {

    // }),

    // // 第三阶段：挂载后

    // onMounted(() => {

    // }),

    return {
      ...toRefs(state)
    }
  }
}
</script>