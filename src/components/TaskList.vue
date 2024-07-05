<script setup>
import Task from './Task.vue';
import { useTaskStore } from '@/stores/TaskStore';
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

// values from store
const store = useTaskStore()
const { taskFilter, tasks, searchTerm } = storeToRefs(store);
const { getAllTasks } = store

// variables
const taskList = ref(tasks);
const reloadPage = ref(false);
const currentFilter = ref(taskFilter.value);

// watchers
watch(taskFilter, (newTaskFilter, oldTaskFilter) => {
  currentFilter.value = newTaskFilter;
  reloadPage.value = true;
});

watch(searchTerm, (newSearchTerm, oldSearchTerm) =>{    
  reloadPage.value = true;   
})

watch(reloadPage, (newReloadPage, oldReloadPage) =>{
  if(newReloadPage){    
    let filter = taskFilter.value; 
    let newTaskList = getAllTasks;
    let newSearchTerm = searchTerm.value;
    reloadPage.value = false;
        
    if(filter == "completed"){
      newTaskList = newTaskList.filter(task => task.completed == true)     
    }
    
    if(filter == "pending"){
      newTaskList = newTaskList.filter(task => task.completed != true)     
    }    

    if(newTaskList != ""){
        newTaskList = newTaskList.filter(task => task.name.toLowerCase()
                                  .includes(newSearchTerm.toLowerCase()));
    } 

    taskList.value = newTaskList;
  }
})

// functions
const UpdateTasks = () =>{
  reloadPage.value = true;
}
</script>

<template>
  <section class="tasklist">
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