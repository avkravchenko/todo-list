<template>
  <div class="app-container">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/task-tracker">Task Tracker</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import "../src/styles/app.scss";
export default {}
</script>
