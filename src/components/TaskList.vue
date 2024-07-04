<script setup>
import Task from './Task.vue'
import FilterTasks from'@/components/FilterTasks.vue'
import { useTaskStore } from '@/stores/TaskStore'
import { ref, watch } from 'vue';
 import { storeToRefs } from 'pinia'

const store = useTaskStore()
const {taskFilter, tasks} = storeToRefs(store);
const { getAllTasks } = store

const taskList = ref(tasks);

watch(taskFilter, (newTaskFilter, oldTaskFilter) => {
  if(newTaskFilter == "all"){     
      taskList.value = getAllTasks;
    }else if(newTaskFilter == "completed"){
      taskList.value = getAllTasks.filter(task => task.completed == true);
    }else if(newTaskFilter == "pending"){
      taskList.value = getAllTasks.filter(task => task.completed != true);
    }
});

</script>

<template>
  <section class="tasklist">
    <h2 class="tasklist-header">Tasks</h2>    
    <FilterTasks/>
    <div>
      <ul>
      <li v-for="task in taskList" :key="task.id">
        <Task :task="task" />      
      </li>          
    </ul>
    </div>    
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