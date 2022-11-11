import axios from 'axios'
import store from '../store'
const service = axios.create({
    baseURL: 'http://localhost:81',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

service.interceptors.request.use(async config => {
    store.commit('STARTLOADING')
    if(config.headers) {
        if(store.state.token) {
            config.headers.authorization = store.state.token
        }
    }
    return config
})

service.interceptors.response.use(config => {
    store.commit('STOPLOADING')
    return config
}, error => {
    console.log('错误信息', error.response.data);
})

export default service