import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from '@/pages/routes.js'
import store from '@/store/index.js'


import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus'
import 'element-plus/dist/index.css'
// import './assets/main.css'


router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (store.state.user.username) {
            next()
        } else {
            next({
                path: 'login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
