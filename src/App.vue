<template>
  <div>
    <h2>Todo List</h2>
    <input v-model="newTodo" placeholder="Enter a new task" />
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  },
  data() {
    return {
      newTodo: ''
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.$store.dispatch('addTodo', this.newTodo);
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.$store.dispatch('removeTodo', index);
    }
  }
};
</script>
