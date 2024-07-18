import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import mixins from './mixins'
//import router2 from './router/index1.js'


const app = createApp(App);
app.use(router);
app.mixin(mixins);

// Vue 애플리케이션이 마운트된 후에 라우터를 사용하여 라우트 이동
router.isReady().then(() => {
  app.mount('#app');

  // Vue Router Navigation Guard를 사용하여 404 에러 발생 시 홈페이지로 리디렉션
  router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) { // 매칭되는 라우트가 없는 경우
      next({ name: 'Home' }); // 홈페이지로 리디렉션
    } else {
      next(); // 다음 라우트로 이동
    }
  });

  // 사용자 상호작용이나 특정 이벤트 발생 시 라우팅을 시도하는 경우
  // router.push({
  //   name: 'DatabindingDetail',
  //   params: {
  //     userNo: 1 // 예시로 1을 넘김
  //   }
  // });
});