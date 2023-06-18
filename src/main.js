import Vue from 'vue';
import App from './App.vue';
import router from '../src/router/router';
import store from '../src/store/store';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
