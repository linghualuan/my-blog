<template>
    <div class="column-detail-page w-75 mx-auto">
        <div class="column-info row mb-4 border-bottom pb-4 aligin-items-center">
            <div class="col-3 text-center">
                <img :src="column!.avatar" alt="" class="rounded-circle">
            </div>
            <div class="col-9">
                <h4>{{column!.title}}</h4>
                <p class="text-muted">{{column!.description}}</p>
            </div>
        </div>
    </div>
    <PostList :list="list"></PostList>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { GlobalDataProps } from '../store'
import PostList from './PostList.vue'
export default defineComponent({
    name: 'ColumnItem',
    components: {
        PostList
    },
    setup() {
        const route = useRoute()
        const store = useStore<GlobalDataProps>()
        const columnId = +route.params.id

        /*
        使用getters获取posts和column
        */
        const column = computed(() => store.getters.getColumnById(columnId))
        const list = computed(() => store.getters.getPostsById(columnId))
        return {
            column,
            list
        }
    }
})
</script>

<style>

</style>