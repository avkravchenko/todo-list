<template>
    <div>
      <h2>Task Tracker Page</h2>
      <form @submit.prevent="addTask" v-if="!editingTask">
        <input type="text" v-model="taskName" placeholder="Enter task name" />
        <button type="submit">Add Task</button>
      </form>
      <form @submit.prevent="updateTask" v-if="editingTask">
        <input type="text" v-model="editingTask.name" />
        <button type="submit">Update Task</button>
        <button type="button" @click="cancelEdit">Cancel</button>
      </form>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          {{ task.name }}
          <button @click="editTask(task)">Edit</button>
          <button @click="deleteTask(task.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        taskName: '',
        editingTask: null
      };
    },
    computed: {
      tasks() {
        return this.$store.getters.getTasks;
      }
    },
    methods: {
      addTask() {
        const task = {
          id: Date.now(),
          name: this.taskName
        };
        this.$store.dispatch('addTask', task);
        this.taskName = '';
      },
      editTask(task) {
        this.editingTask = task;
        this.taskName = task.name;
      },
      updateTask() {
        if (this.editingTask) {
          this.$store.dispatch('updateTask', this.editingTask);
          this.cancelEdit();
        }
      },
      cancelEdit() {
        this.editingTask = null;
        this.taskName = '';
      },
      deleteTask(taskId) {
        this.$store.dispatch('deleteTask', taskId);
      }
    },
    created() {
      this.$store.dispatch('initializeTasks');
    }
  }
  </script>
  