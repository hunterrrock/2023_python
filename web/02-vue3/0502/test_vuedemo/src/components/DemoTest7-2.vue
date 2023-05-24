<template>
    <div>
        <h1>事件对象：event   $event 表示事件对象</h1>
        <input type="text" name='name' id='id' ymx='ymx1' @input='inputHandle($event)'>

        <h1>事件对象2-给变量赋值</h1>
        <input type="text" v-bind:value='address' @keyup.enter='login' @keydown.tab='tab' @input="inputHandle2($event)">
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
            address:'上海市松江区'
        })

        const inputHandle= (e)=>{
            console.log('事件对象为',e)
            console.log('事件对象的srcElement:',e.srcElement) //火狐浏览器不兼容，和target值是一样的，只是浏览器的兼容不一样
            console.log('事件对象的target:',e.target) //IE浏览器不兼容，target更常用    
                //===><input type="text" name="name" id="id" ymx="ymx1">

            console.log('您输入的值是',e.target.value)
            console.log('元素的id属性值是',e.target.id)
            console.log('元素的name属性值是',e.target.name)
            console.log('元素的自定义属性值是',e.target.getAttribute('ymx')) //自定义属性只能用getAttribute来获取；其他的自带的属性也可以用getAttribute来获取
        }
    
     
        const inputHandle2= (e)=>{
            console.log('您输入的值是',e.target.value)
            state.address = e.target.value
            console.log('state.address的值是',state.address)

        }

        const login =()=>{
            console.log('去登陆enter')
        }

        const tab =()=>{
            console.log('我有tab')
        }
    
        return {
            ...toRefs(state),
            inputHandle,
            inputHandle2,
            login,
            tab
        }
    }
}
</script>

<style lang="scss" scoped>

</style>