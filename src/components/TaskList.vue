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
const reloadPage = ref(false);
const currentFilter = ref(taskFilter.value);

watch(taskFilter, (newTaskFilter, oldTaskFilter) => {
  if(newTaskFilter == "all"){     
      taskList.value = getAllTasks;
      currentFilter.value = newTaskFilter;
    }else if(newTaskFilter == "completed"){
      taskList.value = getAllTasks.filter(task => task.completed == true);
      currentFilter.value = newTaskFilter;
    }else if(newTaskFilter == "pending"){
      taskList.value = getAllTasks.filter(task => task.completed != true);
      currentFilter.value = newTaskFilter;
    }
});

watch(reloadPage, (newReloadPage, oldReloadPage) =>{
  if(newReloadPage){    
    let filter = taskFilter.value; 
    taskList.value = getAllTasks;
    reloadPage.value = false;
        
    if(filter == "all" && currentFilter == "all"){     
      taskList.value = getAllTasks;
    }else if(filter == "completed"){
      taskList.value = getAllTasks.filter(task => task.completed == true);
    }else if(filter == "pending"){
      taskList.value = getAllTasks.filter(task => task.completed != true);
    }
  }
})

const UpdateTasks = () =>{
  reloadPage.value = true;
}
</script>

<template>
  <section class="tasklist">
    <h2 class="tasklist-header">Tasks</h2>    
    <FilterTasks/>
    <div :v-if="taskList.length > 0">
      <ul>
      <li v-for="task in taskList" :key="task.id">
        <Task :task="task" @taskUpdated="UpdateTasks" />      
      </li>          
    </ul>
    </div>
    <div v-if="taskList.length <= 0">
      <h2 v-if="taskFilter == 'all'" class="emptyList">The Task List is empty.</h2>
      <h2 v-if="taskFilter == 'pending'" class="emptyList">There are no pending Tasks.</h2>
      <h2 v-if="taskFilter == 'completed'" class="emptyList">There are no completed Tasks.</h2>
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

.emptyList{
  width: 50%;
  height: 30vh;
  padding: 8px 16px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>