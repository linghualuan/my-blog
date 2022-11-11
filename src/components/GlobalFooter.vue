<template>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
        <small>
            <ul class="list-inline mb-0">
                <li class="list-inline-item"><a href="#">课程</a></li>
                <li class="list-inline-item"><a href="#">文档</a></li>
                <li class="list-inline-item"><a href="#">联系</a></li>
                <li class="list-inline-item"><a href="#">更多</a></li>
            </ul>
        </small>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Footer'
})
</script>

<style>
    footer {
        margin-top: 40px;
    }
</style>
