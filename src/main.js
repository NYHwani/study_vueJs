import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import mixins from './mixins'
//import router2 from './router/index1.js'


createApp(App)
.use(router)
.mixin(mixins)
.mount('#app')


/*createApp(App).use(router2).mount('#test')
router2.push({
    path: 'databinding/',
    params: {
        userNo: 1
    }
})*/