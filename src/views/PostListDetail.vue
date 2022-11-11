<template>
    <div class="container">
        <img :src="content.image" alt="">
        <h1>{{content.title}}</h1>
        <br><br>
        <p>{{content.content}}</p>
        <br><br>
        <span>发表于: {{content.createdAt}}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { GlobalDataProps } from '../store'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default defineComponent({
    name: 'PostListDetail',
    setup() {
        const store = useStore<GlobalDataProps>()
        const route = useRoute()
        const id = +route.params.id
        
        const content = computed(() => store.getters.getPostDetailById(id))
        console.log(content);
        
        return {
            content
        }

    }
})
</script>

<style>
.container img {
    width: 100%;
    height: 100%;
}
</style>