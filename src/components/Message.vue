<template>
    <teleport to='#message'>
        <div class="alert message-info fixed-top w-50 mx-auto d-flex justify-content-between mt-4"
        :class="classObject" v-if="isShow">
            <strong>{{message}}</strong>
            <button class="btn-close" @click="hide" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import useCreateDom from '../hooks/useCreateDom'
export type messageType = 'success' | 'default' | 'error'
export default defineComponent({
    name: 'Message',
    props: {
        message: String,
        type: {
            type: String as PropType<messageType>,
            default: 'default'
        }
    },
    emit:['class-message'],
    setup(props, context) {
        useCreateDom('message')

        const isShow = ref(true)
        const classObject = {
            'alert-primary': props.type === 'default',
            'alert-success': props.type === 'success',
            'alert-danger': props.type === 'error'
        }

        const hide = () => {
            isShow.value = false
            context.emit('class-message', true)
        }

        return {
            classObject,
            hide,
            isShow
        }
    }
})
</script>

<style>

</style>