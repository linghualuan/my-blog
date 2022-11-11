import Message from '../components/Message.vue'
type messageType = 'success' | 'default' | 'error'
import { createApp } from 'vue'

const useCreateMessage = (message: string, type: messageType, timeout: number | 2000) => {
    const messageInstance = createApp(Message, {
        message,
        type
      })
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)
      messageInstance.mount(mountNode)
      setTimeout(() => {
        messageInstance.unmount()
        document.body.removeChild(mountNode)
      }, timeout)
}

export default useCreateMessage

// import Message from '../components/Message.vue'
// import { createApp } from 'vue'
// type messageType = 'success' | 'default' | 'error'

// const useCreateMessage = (message: string, type: messageType, timeout: number = 2000 ) => {
//     const messageInstance = createApp(Message, {
//         message, type
//     })
//     const messageNode = document.createElement('div')
//     document.body.appendChild(messageNode)
//     messageInstance.mount(messageNode)
//     setTimeout(() => {
//         messageInstance.unmount
//         document.body.removeChild(messageNode)
//     }, timeout)
// }

// export default useCreateMessage