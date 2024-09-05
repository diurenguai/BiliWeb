import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store/index.js'
import router from './router/index.js'
import utils from './util/index.js'
import mitt from 'mitt';
import App from './App.vue'
import './views/css/global.scss'
const app = createApp(App) // 创建应用实例，并将根组件关联到该实例  

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 现在应用实例已经包含了 DemoCo 组件，可以在 App.vue 或其子组件中使用 <DemoCo />  
app.use(store);
app.use(router);
app.use(utils);
app.config.globalProperties.$bus = new mitt()
app.mount('#app') // 挂载应用到 DOM 元素上，'#app' 是该元素的 id
