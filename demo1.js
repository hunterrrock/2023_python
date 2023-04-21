//模拟：export



/* 
export要点：
1.export可以单独导出一个变量、常量、函数、类
2.export可以用多次
3.可以先定义好，然后一次性导出1个或多个，使用{}
4.export可以出现在模块【全局】（非块内）的任意位置，模块提升
5.可以用as来重命名

*/

// 1.导出一个变量
export const PI = 3.1415

// 2.导出一个函数
export function add(a, b) { return a + b }

//也可以先定义好再一次性导出

const PI2 = 3.1415926
const add2 = (c, d) => { return c + d };

export {PI2 as PI22 ,add2}