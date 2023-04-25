# ES6的新特性

### ECMA:

- ECMA（欧洲计算机制造商协会）设置了JavaScript的标准规范，命名为ECMAScript


- 2015年及往后的每年发布的版本都为ES6（是一个历史名词，一个泛指）

### ES6新特性-数据类型：

新增Symbol、BigInt、Map、Set、RegExp等数据类型

JavaScript中的两大数据类型：基本数据类型、复杂数据类型（又叫引用数据类型）

#### 基本数据类型：

 Number数字、String字符串、Boolean布尔、Undefined未定义、Null空、Symbol（用的非常少，只有一些底层代码才会看到）、BigInt

#### 引用数据类型:

  Object对象、Array数组、Function函数、Date日期、Map、Set、RegExp正则（regular expression）

    Number类型：如果数据太长了，会丢失精度，被抹零；而BigInt可以解决这个问题

为什么要把数据分为两类呢？（基本数据类型和引用数据类型）

```javascript
基本数据类型：
var name = ”张三“  字符串类型，name 是变量名，张三 是变量值  
var age = 22     数字类型，age 是变量名，22是变量值
引用数据类型
function fn1(a,b){return a+b}
obj = {"name":"马云"}
```

内存分为：

栈内存（小）   ：基本数据类型都会存在栈内存里,

​					变量名 name、age、fn1、bj;变量值 张三、22

堆内存（大）:

​					{"name":"马云"}

在jvm中，经常讲的内存异常溢出，就是指堆内存的溢出。

堆内存：存放的是 引用数据类型的变量值

栈内存：存档的是 引用数据类型的变量名和引用地址、基本数据类型的全部（变量名和变量值）

引用：会有一个引用地址，都是以0x开头的地址符号 指向了堆内存里的具体数据

### ES6新特性-let和const

因为var指令存在的bug问题，所以ES6新增了let指令来代替var指令，但是仍然保留了var指令来声明变量。但是它支持let来声明。

```javascript
var 指令存在的三大bug:
1、作用域问题
2、变量提升
3、重复声明
```

const指令，用来声明【常量】的。 对象，数组，函数等都是用const指令来声明的。

live server插件：可以实现保存了代码后，浏览器不需要重启或者页面刷新就可以直接加载出最新的内容

live===热加载：无需重启项目，即可看到修改之后的东西。

server===http://127.0.0.1:5500/1-%E5%8F%98%E9%87%8F%E4%BD%9C%E7%94%A8%E5%9F%9F.html   帮我们模拟发布一个本地的服务器，来预览我们的页面

Ref开头的ReferenceError错误---》引用错误

变量提升：

var 变量可以在 变量被声明之前使用，值为undefined，而且不会引发异常；所以let命令纠正了该bug，使得变量需要在声明后才能被使用。

函数块：

```javascript
  function test1() {   

	var a = 1

 	var a = 2

	console.log('变量a的值为：',a)

  }
function 是 关键字，像python中的def 
test1是函数名 ()是参数或者传入值的地方
{}是函数块
```

### ES6新特性-变量的解构赋值

解构===针对的引用数据类型中的：对象、数组

数组的解构：



对象的结构：

