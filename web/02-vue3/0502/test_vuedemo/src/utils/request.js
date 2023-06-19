import axios from "axios"
// 配置中心
import webConfig from '@/config/globalconfig.js'


// 创建一个axios实例
const request = axios.create({
    baseURL: 'http://121.4.20.49:8403/api',
    timeout: 120000,   //默认值为0，表示永不超时
    headers: {}
})

// 添加请求拦截器
// token 和密钥在这一步处理
axios.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    // 获取token
    let token = localStorage.getItem('token')
    // 获取传入的config的url
    let url = config.url
    // 获取whitelist
    let whiteList = webConfig.whiteApi
    // 如果url不在白名单中，并且已经登录了token有值
    if (whiteApi.indexOf(url) === -1 && token) {
        config.headers = {
            Authorization: 'JWT ' + token
            // Authorization: 'JWT ' + store.getters.getLogintoken
        }
    }
    // 密钥

    return config;
}, error => {
    // 对请求错误做些什么
    // 将错误抛出去，让我们的catch可以去处理
    return Promise.reject(error);
});


// 添加响应拦截器（可以统一在此做一个兜底处理，然后再把错误抛出去，让catch也可以处理）
// axios.interceptors.response.use(function (response) {
//     // 响应成功的拦截
//     // 2xx 范围内的状态码都会触发该函数。
//     // 对响应数据做点什么
//     return response; 
//   }, function (error) {
//     // 响应失败的拦截
//     // 超出 2xx 范围的状态码都会触发该函数。
//     // 对响应错误做点什么
//     return Promise.reject(error);
//   });

export default request;
