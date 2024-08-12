import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import mixins from './mixins'
//import router2 from './router/index1.js'

// 부트스트랩 CSS 파일 import
import 'bootstrap/dist/css/bootstrap.css';
// 부트스트랩 JavaScript 파일 import (optional: 필요에 따라)
import 'bootstrap/dist/js/bootstrap.bundle';

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