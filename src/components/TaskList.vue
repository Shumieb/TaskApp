<script setup>
import Task from './Task.vue'
</script>

<template>
  <section class="tasklist">
    <h2 class="tasklist-header">Tasks</h2>
    <ul>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
    </ul>
  </section>
</template>

<style scoped>
.tasklist{
  padding: 8px 12px;
}

.tasklist .tasklist-header{
  text-decoration: underline;
  padding: 4px;
  margin-bottom: 15px;
}
ul{
  width: 50%;
  margin: auto;
}
</style>