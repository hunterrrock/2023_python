<template>
    <div>
        <!-- v-model指令 ：用于HTML元素的表单绑定;只能绑定value属性，所以value可以省略
         -->
        <div>
            <p>姓名<input type="text" v-model="name"></p>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
            name:'张三'
        })

    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>