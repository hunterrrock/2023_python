// 模拟：import
// 一个点表示当前目录

// 导入PI变量，和add函数
// import {PI,add} from './demo1.js'




/* 
要点
1.可以用as 来重命名
2.必须要用{}来导入变量/函数等
3.导入的变量或函数的名称要和到处一致
4.from后面【一般】是路径，是导出文件的路径 可以是相对也可以是绝对路径
5.from后面，还可以是非路径（在vue里面用到的）
6.可以一次性导入所有（用* as 一个别名）,用*不用{}


*/
// import {PI,add,PI22 as PI2,add2} from './demo1.js'
import * as list1  from  './demo1.js'


/* console.log('PI的值为：',PI)
console.log('PI2的值为：',PI2)
console.log('调用add函数为：',add(1,6))
console.log('调用add2函数为：',add2(70,6)) */
console.log('PI的值为：',list1.PI)
console.log('PI2的值为：',list1.PI2)
console.log('调用add函数为：',list1.add(1,6))
console.log('调用add2函数为：',list1.add2(70,6))