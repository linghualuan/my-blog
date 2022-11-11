import request from './request'
export interface user {
    username: string
    password: string
}
// 用户登录
export const login = (data: user) => {
    return request({
        url: '/api/login',
        method: 'POST',
        data
    })
}
// 用户注册
export const register = (data: any) => {
    return request({
        url: '/api/reguser',
        method: 'POST',
        data
    })
} 
// 获取用户信息
export const getUserInfo = () => {
    return request({
        url: '/my/getUserInfo',
        method: 'GET'
    })
}
// 上传图片
export const submitFiles = (data:any) => {
    return request({
        url: '/my/updateUserAvatar',
        method: 'POST',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}