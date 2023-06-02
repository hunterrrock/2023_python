<template>
    <div>
        <!-- v-model指令：绑定当选按钮-->
        <p>爱好：
            打篮球<input type="checkbox" name='aihao' value='打篮球' v-model='hobby'>
            踢足球<input type="checkbox" name='aihao' value='踢足球' v-model='hobby'>
            唱歌<input type="checkbox" name='aihao' value='唱歌' v-model='hobby'>
            
        </p>



        <p><button @click="submit">保存</button></p>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
            hobby: []
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