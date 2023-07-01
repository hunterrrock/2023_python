import request from "./request"

// 一个get方法
export const get =(params)=>{
    for (let key in params) {
        if (params[key] == null || params[key] === 'undefined') {
        delete params[key]}
    }
    return request({
        url:'/',
        method:'get',
        params:{
            ...params
        }
    })
}

// 登录
export const login =(params)=>{
    for (let key in params) {
        if (params[key] == null || params[key] === 'undefined') {
        delete params[key]}
    }
    return request({
        url:'/token/',
        method:'post',
        data:params
    })
}
