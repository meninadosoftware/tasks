
import App from './App.vue'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import ElementPro from 'element-pro-components'


import 'element-plus/dist/index.css'
import 'element-pro-components/lib/styles/index'
createApp(App).use(ElementPlus).use(ElementPro).mount('#app')

