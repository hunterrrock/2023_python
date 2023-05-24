<template>
    <div>
        <h1>v-on指令，用于绑定事件，缩写是@符号</h1>
        <button v-on:click='count+=1'>点击了：{{count}}次</button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
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