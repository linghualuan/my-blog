<template>
    <nav class="navbar navbar-light bg-primary my-3">
        <div class="container-fluid">
            <router-link to="/home" class="navbar-brand" style="color: white;">如约而至</router-link>
            <ul v-if="!user.isLogin" class="list-inline mb-0">
                <li class="list-inline-item">
                    <router-link to="/login" class="btn btn-outline-light">登录</router-link>
                </li>
                <li class="list-inline-item">
                    <router-link to="/register" class="btn btn-outline-light">注册</router-link>
                </li>
            </ul>
            <ul v-else class="list-inline mb-0">
                <li class="list-inline-item">
                    <Dropdown :type="user.name">
                        <DropdownItem><router-link to="/createpost" class="dropdown-item">新建文章</router-link></DropdownItem>
                        <DropdownItem disabled><a href="#" class="dropdown-item">编辑资料</a></DropdownItem>
                        <DropdownItem><a href="#" class="dropdown-item" @click="loginOut">退出登录</a></DropdownItem>
                    </Dropdown>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import { useStore } from 'vuex'
export interface UserProps {
    id?: number,
    name?: string,
    isLogin: boolean
}
export default defineComponent({
    name: 'GlobalHeader',
    components:{
        Dropdown,
        DropdownItem
    },
    props: {
        user: {
            type: Object as PropType<UserProps>,
            required: true
        }
    },
    setup() {
        const store = useStore()
        const user = computed(() => {
            return store.state.user
        })
        const loginOut = () => {
            store.commit('LOGINOUT')
        }
        return {
            user,
            loginOut
        }
    }
})
</script>

<style>

</style>