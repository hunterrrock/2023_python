<template>
    <div>
        <!-- v-if 和 v-show -->
        <!-- v-if :当不满足条件时,元素被删除 -->
        <!-- v-show :当不满足条件时,元素被隐藏 -->
        <h1>条件判断指令v-if</h1>
            <div v-if='count>=80'>优秀</div>
            <div v-else-if='count >=60'>及格</div>
            <div v-else>不及格</div>
        <h1>条件判断指令v-show</h1>
            <div v-show="count>=80">优秀SHOW</div>
            <div v-show="count>=60 && count <80">及格SHOW</div>
            <div v-show="count< 60">不及格SHOW</div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 60,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>