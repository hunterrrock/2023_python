// 第一步：导入axios库
import axios from 'axios'
import request  from './request.js'
// 第二步：编写请求配置

const config =
{
    // baseURL: 'http://121.4.20.49:8403/api',
    url: '/token/',
    method: 'post',

    data: {
        username: "songqin",
        password: "admin",
        captcha: "9999",
        captchaKey: 2186
    }
 
}
// 第三步：发送网路请求
http(config).then((res) => {
    console.log('res的值为：', res)
    console.log('res里的data的值为：', res.data)

}).catch((e) => {
    console.log('异常的响应对象为：', e.response)
    console.log('异常的响应状态码为：', e.response.status)
})

