<template>
    <div>
        <!-- v-model指令-绑定文本框 ：用于HTML元素的表单绑定;只能绑定value属性，所以value可以省略
        v-model就是语法糖，实际上就是：v-bind:value + v-on:Input的组合 -->
        <p>姓名<input type="text"  v-model.trim='name'></p>
        <p>年龄<input type="text"  v-model.number='count'></p>
        <p><button @click="submit">保存</button></p>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
            name:'塞尔达'
        })
        const submit =()=>{
            console.log('state对象的内容为：',state)
        }
        
        return {
            submit,
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>