import { createStore } from "vuex";
import { testData, testPosts, PostDetailData } from "@/testData";
import { login, getUserInfo } from '../api'
import { setToken, getToken, removeToken } from '../utils/token'
import useCreateMessage from '../hooks/useCreateMessage'

export interface ColumnProps {
    id: number,     //专栏id
    title: string,      //专栏标题
    avatar?: string,    //专栏图片
    description: string     //专栏描述
}

export interface PostProps {
    id: number,     //专栏里每一项的id
    title: string,      //每一项的标题
    content: string,    //内容
    image?: string,     //图片
    createdAt: string,      //日期
    columnId: number  //对应的的专栏id,对应于ColumnProps中的id
}
// 定义用户接口
interface UserProps {
    isLogin: boolean
    name?: string
    id?: number
    columnId?: number
}

interface errorProps {
    status: boolean
    message?: string 
}

export interface PostDetail {
    id: number,
    title: string,
    content: string,
    postId: number,
    createdAt: string,
    image?: string 
}

// 定义store.state的全局接口
export interface GlobalDataProps {
    error: errorProps
    user: UserProps
    column: ColumnProps[]
    posts: PostProps[]
    postsDateil: PostDetail[]
    token: string
    loading: boolean
}

const store = createStore<GlobalDataProps>({
    state: {
        error: { status: false },
        user: { isLogin: false, name: 'linghualuan' },
        column: testData,
        posts: testPosts,
        postsDateil: PostDetailData,
        token: getToken() || '',
        loading: false
    },

    actions: {
        // 用户登录
        async userLogin({ commit }, userInfo) {
            const result = await login(userInfo)
            console.log(result);
            
            // 如果状态为0则提交mutation，改变用户的登录状态，否则返回错误
            if(result.data.status === 0) {
                commit('LOGIN', result.data.token)
                setToken(result.data.token)
                useCreateMessage('登录成功', 'success', 2000)
            }else {
                useCreateMessage('登录失败', 'error', 2000)
                return Promise.reject(new Error('fail'))
            }
        },
        
        // 获取用户信息
        async getUser({commit}) {
            const result = await getUserInfo()
            if(result.data.status === 0) {
                commit('GETUSER')
            }
        }
    },

    mutations: {
        // 改变loading的值
        STARTLOADING(state) {
            state.loading = true
        },
        STOPLOADING(state) {
            state.loading = false
        },
        GETUSER(state) {
            state.user = { ...state.user, isLogin: true, name: 'linghualuan', columnId: 1 }
        },
        // 修改用户登录数据
        LOGIN(state, token) {
            state.token = token
            state.user = { ...state.user, isLogin: true, name: 'linghualuan', columnId: 1 }
        },
        // 添加文章
        createPosts(state, post) {
            state.posts.push(post)
        },
        // 退出登录
        LOGINOUT(state) {
            state.user = { ...state.user, isLogin: false, name: 'linghualuan', columnId: 1 }
            removeToken()
            state.token = ''
            useCreateMessage('退出成功', 'success', 2000)
        }
    },

    getters: {
        // 根据id获取column
        getColumnById: (state) => (columnId: number) => {
            return state.column.find(item => item.id === columnId)
        },
        //根据id获取posts
        getPostsById:(state) => {
            return (columnId: number) => {
                return state.posts.filter(item => item.columnId === columnId)
            }
        },

        getPostDetailById:(state) => {
            return (id: number) => {
                return state.postsDateil.find(item => item.id === id)
            }
        }
    }
})

export default store