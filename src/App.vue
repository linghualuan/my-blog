<template>
    <div class="container">
        <!-- <button class="btn btn-primary" @click="modalShow">点击</button> -->
        <ConfiremPopup>
            123
        </ConfiremPopup>
        <Loader text="拼命加载中" v-if="loading" background="rgbs(0, 0, 0, .5)"></Loader>
        <GlobalHeader :user="currentUser"></GlobalHeader>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import Footer from './components/GlobalFooter.vue'
import Loader from './components/Loader.vue'
// import Message from './components/Message.vue'
import { useStore } from 'vuex'
import ConfiremPopup from './components/ConfirmPopup.vue'

// 用户信息
const currentUser: UserProps = {
    isLogin: false,
    name: "linghualuan",
    id: 1
};

export default defineComponent({
    name: "App",
    components: {
        GlobalHeader,
        Footer,
        Loader,
        // Message,
        ConfiremPopup
    },
    setup() {
        const store = useStore()
        // 是否正在加载
        const loading = computed(() => store.state.loading)

        const modalShow = () => {
            console.log('///');
        }
        return {
            currentUser,
            loading,
            modalShow
        }
    },
});
</script>

<style>

</style>
