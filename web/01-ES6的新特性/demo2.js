// 用来模拟：export default 

/* 

要点：
1.export default 每个模块只能够使用一次
2.只能导出一个
3.export default 可以导出变量，常量，函数，类，匿名函数
4.export 和 export default可以同时用在一个模块里，但是export需要加上{}
*/

// const PI3 = 3.14
// const ADD = (a,b)=>a+b
// ((a,b)=>{console.log(a+b)})(1,2)

// export default PI3       //默认导出的是变量
// export default ADD       //默认导出的是函数
export default (a,b)=>a+b  //默认导出的是匿名函数

let a = 11
// let b = 123

export {a} 