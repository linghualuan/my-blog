import ConfirmPopup from '../components/ConfirmPopup.vue'
import { createApp } from 'vue'
type Func = () => void

const useCreatModal = (content: string, func: Func) => {
    const modalInstance = createApp(ConfirmPopup, {
        content,
        func
    })
    const mountNode = document.createElement('div')
    document.body.appendChild(mountNode)
    modalInstance.mount(mountNode)
}

export default useCreatModal