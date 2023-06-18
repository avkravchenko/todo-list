// src/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage.vue';
import TaskTrackerPage from '../components/TaskTrackerPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/task-tracker',
    name: 'taskTracker',
    component: TaskTrackerPage
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
