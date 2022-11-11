<template>
    <div class="file-upload">
        <button class="btn" @click.prevent="fileChange">
            <slot v-if="status == 'ready'" name="readyLoader">
                点击上传
            </slot>
            <slot v-if="status == 'loading'" name="loading">
                上传中...
            </slot>
            <slot v-if="status == 'success'" name="upload" :upload="uploadData">
                上传成功
            </slot>
            <slot v-if="status == 'error'">
                上传失败
            </slot>
        </button>
        <input type="file" @change="handleFileChange" ref="fileInput" class="file-input d-none" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
type fileLoadStatus = 'ready' | 'loading' | 'success' | 'error'
import { submitFiles } from '../api'
type checkFunction = (file: File) => boolean
export default defineComponent({
    name: 'Uploader',
    props: {
        beforeUpload: {
            type: Function as PropType<checkFunction>
        }
    },

    setup(props) {
        const status = ref<fileLoadStatus>('ready')
        const fileInput = ref<null | HTMLInputElement>(null)
        const uploadData = ref()
        // 点击按钮触发input获取文件的事件
        const fileChange = () => {                        
            if(fileInput.value) {
                fileInput.value.click()
            }
        }

        const handleFileChange = async (e: Event) => {
            let target = e.target as HTMLInputElement
            if(target.files) {
                const uploadFile = target.files[0]
                if(props.beforeUpload) {
                    // 判断是否通过
                    const result = props.beforeUpload(uploadFile)
                    if(!result) return
                }
                status.value = 'loading'

                const formData = new FormData()
                formData.append('image', uploadFile)
                let result = await submitFiles(formData)
                console.log(result)
                if(result.data.status == 0) {
                    status.value = 'success'
                    uploadData.value = result.data.imgPath
                }else {
                    status.value = 'error'
                }
            }            
        }
        return {
            handleFileChange,
            fileChange,
            status,
            fileInput,
            uploadData
        }
    }
})
</script>

<style>

</style>