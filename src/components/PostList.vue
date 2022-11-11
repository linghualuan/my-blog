<template>
    <div class="post-list">
        <article v-for="post in list" :key="post.id" class="card mb-3">
            <div class="card-body">
                <a href="#" @click.prevent="getPostDateil(post.columnId,post.id)">{{post.title}}</a>
                <div class="row my-3 align-items-center">
                    <div v-if="post.image" class="col-3">
                        <img :src="post.image" alt="" class="rounded-lg">
                    </div>
                    <p :class="{'col-9': post.image}">{{post.content}}</p>
                </div>
                <span class="text-muted">{{post.createdAt}}</span>
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { PostProps } from '../testData'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
    name: 'PostList',
    props: {
        list: {
            type: Array as PropType<PostProps[]>
        }
    },
    setup(props) {
        const store = useStore<GlobalDataProps>()
        const router = useRouter()
        const route = useRoute()
        
        const getPostDateil = (columnId:number , id: number) => {
            const content = computed(() => store.getters.getPostDetailById(id))
            console.log('///', content);
            
            router.push({name: 'Postdetail', params: { columnId, id }})
            // console.log('columnId',columnId);
            // console.log('postId', postId);
            
        }
        return {
            getPostDateil
        }
    }
})
</script>

<style>
.card-body a {
    text-decoration: none;
    color: blue;
    font-size: 27px;
}
</style>