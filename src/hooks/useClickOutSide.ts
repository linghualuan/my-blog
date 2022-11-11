import { ref, onMounted, onUnmounted, Ref } from 'vue'

// elementRef定义为null或HTMLElement
const useClickOutSide = (elementRef: Ref<null | HTMLElement>) => {
    // 是否点击到了目标元素外面，默认为false
    const isClickOut = ref(false)
    // 定义点击事件，e:MouseEvent表示为点击事件
    const handler = (e: MouseEvent) => {
        // 当elementRef这个节点存在时触发
        if(elementRef.value) {
            if(!elementRef.value.contains(e.target as HTMLElement)) {
                isClickOut.value = true
            } else {
                isClickOut.value = false
            }
        }
    }
    // 绑定点击事件
    onMounted(() => {
        document.addEventListener('click', handler)
    })
    // 解除绑定
    onUnmounted(() => {
        document.removeEventListener('click', handler)
    })
    // 返回值，是否点击到了目标元素
    return isClickOut
}

export default useClickOutSide