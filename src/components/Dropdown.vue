<template>
    <div class="dropdown" ref="dropdownRef">
        <a class="btn btn-light dropdown-toggle" href="#" @click.prevent="trggleOpen" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            你好{{type}}
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" :style="{display: 'block'}" v-if="isOpen">
            <slot></slot>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutSise from '../hooks/useClickOutSide'
export default defineComponent({
    name: 'Dropdown',
    props: {
        type: {
            type: String
        }
    },
    setup() {
        const isOpen = ref(false)
        const dropdownRef = ref<null | HTMLElement>(null)
        const isClickOutSide = useClickOutSise(dropdownRef)
        // 监听isClickOutSide的变化，触发事件
        
        const trggleOpen = () => {
            isOpen.value = !isOpen.value
        }
        watch(isClickOutSide, () => {
            if(isClickOutSide.value && isOpen.value) {
                isOpen.value = false
            }
        })
        return {
            isOpen,
            trggleOpen,
            dropdownRef
        }
    }
})
</script>

<style>

</style>