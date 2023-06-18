// src/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask(state, updatedTask) {
      const taskIndex = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (taskIndex !== -1) {
        state.tasks.splice(taskIndex, 1, updatedTask);
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    initializeTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    updateTask({ commit }, updatedTask) {
      commit('updateTask', updatedTask);
    },
    deleteTask({ commit }, taskId) {
      commit('deleteTask', taskId);
    },
    initializeTasks({ commit }) {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      commit('initializeTasks', tasks);
    }
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    }
  }
});

export default store;
