<template>
    <teleport to='#modal'>
        <div class="modal modal-dialog modal-dialog-centered fixed-top w-50 d-flex justify-content-between mt-4" v-if="isShow">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">标题</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" @click="modalClose" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <slot>
                            <p>123</p>
                        </slot>
                    </div> 
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="modalCancel" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="modalConfirm">确认</button>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useCreateDom from '../hooks/useCreateDom'
// type Func = () => void
export default defineComponent({
    name: 'ConfirmPopup',
    props: {
        content: String,
        // func: Function as PropType<Func>,
        isShow: Boolean
    },
    setup(props) {
        useCreateDom('modal')

        const content = props.content

        const isShow = ref(true)
        const modalCancel = () => {
            isShow.value = false
            console.log('cancel');
        }
        const modalConfirm = () => {
            isShow.value = false
            console.log('confirm');
        }
        const modalClose = () => {
            isShow.value = false
            console.log('close');
        }
        return {
            isShow,
            modalCancel,
            modalConfirm,
            modalClose,
            content
        }
    }
})
</script>

<style>

</style>