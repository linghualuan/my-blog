<template>
    <form class="validate-form-container">
        <slot name="default"></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit">
                <button type="submit" class="btn btn-primary">Submit</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
// 定义ValidateInput返回的结果的函数
type ValidateFunc = () => boolean
export default defineComponent({
    name: 'ValidateForm',
    emits: ['form-submit'],
    setup(props, context) {
        // 保存ValidateInput返回的结果的布尔数组，
        let funcArr: ValidateFunc[] = []
        const callback = (func?: ValidateFunc) => {
            if(func) {
                funcArr.push(func)
            }
        }
        emitter.on('form-item-created', callback)
        onUnmounted(() => {
            emitter.off('form-item-created', callback)
            funcArr = []
        })
        const submitForm = () => {
            const result = funcArr.map(func => func()).every(result => result)
            context.emit('form-submit', result)
        }
        return {
            submitForm
        }
    }
})
</script>

<style>

</style>