// src/main.js
import Vue from 'vue';
import App from './App.vue';
import store from '../src/store/store.js';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
