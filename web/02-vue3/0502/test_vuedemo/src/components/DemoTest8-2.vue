<template>
    <div>
        <!-- v-model指令：绑定当选按钮-->
        <p>性别：
            男<input type="radio" name='sex' value='男' v-model='sex'>
            女<input type="radio" name='sex' value='女' v-model='sex'>
            
        </p>


        <p>民族：
            汉族<input type="radio" name='MZ' value='汉族' v-model='MZ'>
            少数民族<input type="radio" name='MZ' value='少数民族' v-model='MZ'>
            
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
            sex:'男',
            MZ:'汉族'
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