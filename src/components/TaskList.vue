<script setup>
import Task from './Task.vue'

import { useTaskStore } from '@/stores/TaskStore'
import { storeToRefs } from 'pinia'

const store = useTaskStore()
const { tasks } = storeToRefs(store)

</script>

<template>
  <section class="tasklist">
    <h2 class="tasklist-header">Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <Task :task="task" />      
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