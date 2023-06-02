
先层叠（排版）再样式--》层叠样式
# 盒模型
- 所有HTML标签都可以看作是一个矩形盒子，由width、height、padding、border构成，称为 盒模型
- 盒子的总宽度 = width + 左右padding + 左右border
```
.box0 {
    width :220px;
    height:220px;
    padding:30px;
    border:30px solid red;
}
```
## width属性
- width属性表示盒子内容的宽度
- width属性的单位通常是px，移动端开发也会涉及百分数、rem等单位
- 当块级元素（div、h系列、li等）没有设置width属性时，它将自动撑满

## padding属性
- padding是盒子的内边距，是盒子边框内壁到文字的距离
- padding属性有四个方向，可以分别用最小属性来设置
  - padding-top    上padding
  - padding-right  右padding
  - padding-bottom 下padding
  - padding-left 左padding
- padding四数值写法，如果用四个数值以空格隔开进行设置，分别表示：上、右、下、左（顺时针）
```
padding: 20px 30px 40px 50px;
```
- padding三数值写法，如果用三个数值以空格隔开进行设置，分别表示：上、左右、下的padding
```
padding:20px 30px 40px;
```
- padding二数值写法，如果用两个数值以空格隔开进行设置，分别表示：上下、左右的padding
```
padding:20px 30px;
```
- padding一个数值写法，那就是上下左右同一个数值
## margin属性
- margin是盒子的外边距，即盒子和盒子之间的距离
- 
