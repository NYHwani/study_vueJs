import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import mixins from './mixins'
//import router2 from './router/index1.js'


const app = createApp(App);
app.use(router);
app.mixin(mixins);

// Vue Router가 초기화된 후에 애플리케이션을 마운트
router.isReady().then(() => {
    // Vue Router Navigation Guard 설정
    router.beforeEach((to, from, next) => {
        if (to.matched.length === 0) {
            // 매칭되는 라우트가 없으면 홈페이지로 리디렉션
            next({ name: 'Home' });
        } else {
            next(); // 다음 라우트로 이동
        }
    });

    // 사용자 상호작용이나 특정 이벤트 발생 시 라우팅을 시도
    router.push({
        name: 'DatabindingDetail',
        params: {
            userNo: 1 // 예시로 1을 넘김
        }
    });

    // 라우터 초기화 후 애플리케이션 마운트
    app.mount('#app');
});