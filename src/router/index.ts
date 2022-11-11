import { createRouter, createWebHistory } from "vue-router"
import store from '../store'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue'),
            meta: { readyLogin: true }
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('../views/Register.vue')
        },
        {
            path: '/column/:id',
            name: 'Column',
            component: () => import('../components/ColumnItem.vue')
        },
        {
            path: '/column/:columnId?/postdetail/:id?',
            name: 'Postdetail',
            component: () => import('../views/PostListDetail.vue')
        },
        {
            path: '/createpost',
            name: 'CreatePost',
            component: () => import('../views/CreatePost.vue'),
            meta: { requiredLogin: true }
        },
    ]
})

router.beforeEach((to, from , next) => {
    // 获取token
    const token = store.state.token
    if(to.meta.requiredLogin && !token) {
        // 如果需要登录并且没有token，则跳转到Login页面
        next({name: 'Login'})
    }else if(to.meta.readyLogin && token) {
        /*
        判断是否要跳转到login页面，如果此时已经有token再想跳转到login页面，会强制跳转到主页，
        并且执行获取用户信息的操作，保证刷新后用户信息不用丢失
        */ 
        store.dispatch('getUser')
        next('/')
    }else if(token) {
        //若是已经存在token，在进入下一个路由前执行获取用户信息操作
        store.dispatch('getUser')
        next()
    }else {
        next()
    }
})

export default router