<script setup>
import Task from './Task.vue'

const props = defineProps(["tasks", "handleEdit", "handleComplete", "handleDelete"])

</script>

<template>
  <section class="tasklist">
    <h2 class="tasklist-header">Tasks</h2>
    <ul>
      <li v-for="task in props.tasks" :key="task.id">
        <Task 
          :task="task" 
          :handleEdit="props.handleEdit" 
          :handleComplete="props.handleComplete"
          :handleDelete="props.handleDelete"
        />      
      </li>          
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