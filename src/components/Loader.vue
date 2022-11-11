<template>
    <teleport to='#back'>
        <div
            class="d-flex justify-content-center align-items-center h-100 w-100 loading-container"
            :style="{backgroundColor: background || ''}"
        >
        <div class="loading-content">
        <div class="spinner-border text-primary" role="status">
            <!-- <span class="sr-only">Loading...</span> -->
        </div>
        <p v-if="text" class="text-primary small">{{text}}</p>
        </div>
    </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useCreateDom from '../hooks/useCreateDom'
export default defineComponent({
    name: 'Loader',
    props: {
        background: {
            type: String
        },
        text: {
            type: String
        }
    },
    setup() {
        useCreateDom('back')
    }
})
</script>

<style>
.loading-container {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    text-align: center;
}
</style>