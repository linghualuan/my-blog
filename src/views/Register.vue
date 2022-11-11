<template>
    <h1>注册</h1>
    <ValidateForm @form-submit="onFormSubmit">
        <template #default>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <ValidateInput :rules="emailRules" v-model="email" placeholder="请输入邮箱地址" type="text" ref="inputRef"></ValidateInput>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <ValidateInput :rules="pwdRules" v-model="password" placeholder="请输入密码" type="text"></ValidateInput>
            </div>
        </template>
        <template #submit>
            <button type="submit" class="btn btn-primary">Submit</button>
        </template>
    </ValidateForm>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesProp } from "../components/ValidateInput.vue";
import ValidateForm, { emitter } from '../components/ValidateForm.vue'
import { register } from '../api'
export default defineComponent({
    name: 'Register',
    components: {
        ValidateInput, ValidateForm
    },
    setup() {
        const inputRef = ref<any>()

        let email = ref('')
        let password = ref('')

        // 接收ValidateForm验证是否通过，通过为true，否则为false
        const onFormSubmit = async (result: boolean) => {
            console.log('result',result);
            // 若是返回结果为true，则清空输入框，向ValidateInput发送emit事件
            if(result) {
                emitter.emit('form-submit-success')
                let result = await register({username: email.value, password: password.value})
                console.log('login结果',result);
            }
        }
        // 邮箱的两层验证规则
        const emailRules: RulesProp = [
            { type: "required", message: "邮箱地址不能为空" },
            { type: "email", message: "邮箱格式错误, 请重新输入" },
        ];
        // 密码的两层验证规则
        const pwdRules: RulesProp = [
            { type: 'required', message: '密码不能为空' },
            { type: 'password', message: '密码格式错误, 请重新输入' }
        ]

        return {
            emailRules,
            email,
            password,
            pwdRules,
            onFormSubmit,
            inputRef
        }
    }
})
</script>