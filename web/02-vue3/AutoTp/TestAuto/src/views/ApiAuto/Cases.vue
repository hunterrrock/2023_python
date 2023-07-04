<template>
    <div>
        这里是测试用例组件
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// 1.导入一个store
import {useUserStore} from '@/stores/user1.js'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })

        // 2.调用store（创建一个store对象）
        const stores = useUserStore()

        return {
            stores,
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>