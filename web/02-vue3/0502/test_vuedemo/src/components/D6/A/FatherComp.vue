<template>
    <div>
        <h3>这里是父组件</h3>
        <!-- 步骤3：使用子组件 -->
        <!-- 单标签 -->
        <Child/>
        <!-- 标签对 -->
        <Child> </Child>

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// 步骤2-1：导入子组件
import Child from './ChildComp.vue'

export default {
    // 步骤2-2：注册子组件
    components:{Child},
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>