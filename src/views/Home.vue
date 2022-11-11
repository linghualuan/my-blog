<template>
    <ColumnList :list="list"></ColumnList>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import ColumnList from "../components/ColumnList.vue";
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
export default defineComponent({
    name: 'Home',
    components: {
        ColumnList
    },
    setup() {
        // 定义一个store
        const store = useStore<GlobalDataProps>()
        // 获取专栏的数据
        const list = computed(() => store.state.column)
        return {
            list
        }
    }
})
</script>

<style>

</style>