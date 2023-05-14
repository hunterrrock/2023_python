<template>
    <div>
        <h1>v-text指令 和 v-html指令</h1>
        <!-- 1.v-text指令 -->
        <p v-text="address"></p>

        <!-- 2.v-html指令 -->
        <p v-html="address"></p>

        <!-- 两者的区别,v-html会根据html里的标签含义来解析我们的值,展示在页面上 -->
        <!-- v-text指令只会当作文本输出 -->
   
    </div> 
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
            address:'上海市<u>松江区</u>'
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>