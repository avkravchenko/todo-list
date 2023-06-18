// src/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo: (state, todo) => {
      state.todos.push(todo);
    },
    removeTodo: (state, todoIndex) => {
      state.todos.splice(todoIndex, 1);
    }
  },
  actions: {
    addTodo: ({ commit }, todo) => {
      commit('addTodo', todo);
    },
    removeTodo: ({ commit }, todoIndex) => {
      commit('removeTodo', todoIndex);
    }
  },
  getters: {
    getTodos: state => {
      return state.todos;
    }
  }
});
