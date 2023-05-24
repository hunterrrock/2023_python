<template>
    <div>
        <!-- 事件修饰符：stop，阻止事件冒泡
            事件的冒泡：
              当我们点击最里层时候会触发所有三层的click事件
              从最具体的元素到不具体的元素（由内到外）
                当子元素（事件源）事件触发，事件会沿着包含关系，依次往上级传递，每一级都可以感知到事件，直到触发根元素（根源)
            事件冒泡就是指父元素和子元素有相同的事件,当触发子元素事件时,会向上冒泡,同时也会触发父元素事件
         -->
        <div @click="handleClick('我是最外层')" style='width:300px;height:300px;background:red'>
            <div
                @click.stop="handleClick('我是中间层')" style='width:200px;height:200px;background:yellow'
            >
                <div
                    @click.stop="handleClick('我是最里层')" style='width:100px;height:100px;background:pink'

                ></div>
            
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
        const handleClick =(str)=>{
            console.log(str)
        }
    
        return {
            ...toRefs(state),
            handleClick
        }
    }
}
</script>

<style lang="scss" scoped>

</style>