<template>
    <div>
        <h4>新建文章</h4>
        <Uploader :beforeUpload="beforeUpload">
            <template #readyLoader>
                <!-- 点击上传图片 -->
                <div class="loadImg">
                    点击上传图片
                </div>
            </template>
            <template #loading>
                <div class="spinner-border text-info" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </template>
            <template #upload="uploadData">
                <div class="loadImg img">
                    图片地址: {{uploadData.upload}}
                </div>
                
            </template>
        </Uploader>
        <ValidateForm @form-submit="onFormSubmit">
            <span>文章标题</span>
            <ValidateInput
                v-model="title"
                tagType="input"
                type="text"
                placeholder="请输入文章标题"
            >
            </ValidateInput>

            <span>文章内容</span>
            <ValidateInput
                v-model="content"
                tagType="textarea"
                type="text"
                placeholder="请输入文章内容"
            >
            </ValidateInput>
            <template #submit>
                <button class="btn btn-primary">发表文章</button>
            </template>
        </ValidateForm>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
import Uploader from '../components/Uploader.vue'
import { GlobalDataProps, PostProps } from '../store'
import { useStore } from 'vuex'
import useCreateMessage from '../hooks/useCreateMessage'
export default defineComponent({
    name: 'CreatePost',
    components: {
        ValidateInput, ValidateForm, Uploader
    },

    setup() {
        const store = useStore<GlobalDataProps>()
        // 文章标题
        const title = ref('')
        // 文章内容
        const content = ref('')
        const onFormSubmit = (e: boolean) => {
            if(e) {
                const { columnId } = store.state.user
                if(columnId) {
                    const newPost: PostProps = {
                        id: new Date().getTime(),
                        title: title.value,
                        content: content.value,
                        columnId,
                        createdAt: new Date().toString()
                    }
                    // 提交到mutation
                    store.commit('createPosts', newPost)
                }
            }
        }

        // 判断是否为jpg类型的图片
        const beforeUpload = (file: File) => {
            let isJpg = file.type === 'image/jpeg'
            if(!isJpg) {
                useCreateMessage('只能上传JPG格式的图片', 'error', 5000)
                return false
            }
            return isJpg
        }

        return {
            onFormSubmit,
            content,
            title,
            beforeUpload
        }
    }
})
</script>

<style>
.loadImg {
    width: 1280px;
    height: 250px;
    border-radius: 10px;
    background: #0F2027;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    text-align: center;
    line-height: 250px;
    font-size: 50px;
    color: white;
}
.img {
    font-size: 25px;
    text-align: center;
}
</style>