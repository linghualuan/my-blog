import { onUnmounted } from 'vue'

const useCeateDom = (nodeStr: string) => {
    const node = document.createElement('div')
    node.id = nodeStr
    document.body.appendChild(node)
    onUnmounted(() => {
        document.body.removeChild(node)
    })
}

export default useCeateDom