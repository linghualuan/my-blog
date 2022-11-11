<template>
    <div class="validate-input-container pb-3">
        <input 
            v-if="tagType !== 'textarea'"
            class="form-control"
            :class="{'is-invalid': inputRef.error}"
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            @blur="validateInput"
            :value="inputRef.val"
            @input="updateInput"
            v-bind="$attrs"
        />
        <textarea 
            rows="10"
            v-else
            class="form-control"
            :class="{'is-invalid': inputRef.error}"
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            @blur="validateInput"
            :value="inputRef.val"
            @input="updateInput"
            v-bind="$attrs"
        />
        <div id="emailHelp" class="form-text" style="color: red" v-if="inputRef.error">
            {{ inputRef.message }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive,onMounted } from "vue";
import { emitter } from './ValidateForm.vue'
export interface RuleProp {
    type: "required" | "email" | "password";
    message: string;
}
export type RulesProp = RuleProp[]
// 验证邮箱的正则表达式
const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
// 验证密码的正则表达式
const pwdReg = /^[a-z0-9]+$/i

export default defineComponent({
    name: "ValidateInput",
    props: {
        rules: { type: Array as PropType<RulesProp>},
        modelValue: String,
        tagType: String
    },
    setup(props, context) {
        const inputRef = reactive({
            val: props.modelValue || "",
            error: false,
            message: "",
        })

        const updateInput = (e: Event) => {
            const targetValue = (e.target as HTMLInputElement).value
            inputRef.val = targetValue
            context.emit('update:modelValue', inputRef.val)
        }

        // 输入判定
        const validateInput = () => {       
            if (props.rules) {
                const allPassed = props.rules.every((rule) => {
                    let passed = true
                    inputRef.message = rule.message
                    switch (rule.type) {
                        case 'required':
                            passed = (inputRef.val.trim() !== '')
                            break;
                        case 'password':
                            passed = (pwdReg.test(inputRef.val))
                            break;
                        case 'email':
                            passed = (emailReg.test(inputRef.val))
                            break;
                        default:
                            break;
                    }
                    return passed
                })
                inputRef.error = !allPassed
                return allPassed
            }
            return true
        }
        
        onMounted(() => {
            emitter.emit('form-item-created', validateInput)
        })

        // 接收事件，若提交结果为true，清空输入框
        emitter.on('form-submit-success', () => {
            inputRef.val = ''
        })
        return {
            inputRef,
            validateInput,
            updateInput
        }
    }
})
</script>

<style>

</style>
