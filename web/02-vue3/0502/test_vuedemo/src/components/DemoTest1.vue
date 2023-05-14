<template>
<!-- 第一部分：template,相当于html里的body部分 ，必须的-->
<!-- 在模板中，可以直接使用返回对象中的属性或方法 -->
    <div>计数：{{count}}
        <p v-once>年纪：{{age}}</p>
        <!-- v-once指令:即使这个变量一直在变,但是只使用变量一次,once -->

    </div>
</template>

<script>
// 第二部分：js部分
import { reactive, toRefs, ref, onMounted} from 'vue'

export default {
    // 1.setup函数，是一个生命周期函数（是vue里的，但是比较特殊，不需要从vue里导入，是组合式API的起点）
    // 它比较特殊，无需从vue中导入，其他生命周期函数，都需要导入才能够使用
    // 其他的生命周期函数，都需要在setup中使用
    setup () {
        // 2.定义一个【响应式的-》reactive】对象
        const state = reactive({
            count: 0
        })
        // 2.响应式变量
        const age = ref(0)
        
        //3.定义一个函数
        const addOne = ()=>{

            state.count +=1
            age.value +=1

        }
        // windows对象提供的函数，可以： windows.setInterval()，也可以直接setInterval()调用

        
        //生命周期函数：onMounted,它的参数是一个函数，当页面加载完成后才会执行onMounted
        onMounted(()=>{
          // 每隔多久(ms)执行某个代码/函数-》有点像定时任务
            setInterval(addOne,1000)
        })

        // 4.如果模板template中，需要使用setup中定义的函数、变量，就必须return
        return {
            // 5、...三个点是扩展运算符，用于对象的合并
            // 6、toRefs作用：把一个【响应式】对象，变成普通对象，该普通对象的每一个属性的值都是ref类型
            ...toRefs(state),
            age
        }
    }
}
</script>

/*  第三部分：样式部分 */
<style lang="scss" scoped>

</style>