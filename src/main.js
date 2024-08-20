import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入 FontAwesome 库
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 引入 FontAwesome 图标
import { faHome, faUser, faCalendarAlt, faCog, faBook, faChartBar } from '@fortawesome/free-solid-svg-icons'

// 将图标添加到库中
library.add(faHome, faUser, faCalendarAlt, faCog, faBook, faChartBar)

const app = createApp(App)

// 注册 FontAwesome 组件
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
