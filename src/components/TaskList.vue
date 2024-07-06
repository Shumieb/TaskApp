<script setup>
import Task from './Task.vue';
import { taskData } from "@/assets/data";
import { useTaskStore } from '@/stores/TaskStore';
import { storeToRefs } from 'pinia';
import { ref, watch, onMounted, onUnmounted } from 'vue';

// values from store
const store = useTaskStore()
const { taskFilter, tasks, searchTerm } = storeToRefs(store)

// variables
const taskList = ref([]);
const searching = ref(false);

// lifecycle
onMounted(() => {
  // get data from local storage
 let storedData = localStorage.getItem("storedTasks");

 if(!storedData){
  console.log("no data")
  localStorage.setItem("storedTasks", JSON.stringify(taskData)); 
  taskList.value = taskData;
  tasks.value = taskData;
 }else{
  taskList.value = JSON.parse(localStorage.getItem("storedTasks") || "[]");
  tasks.value = JSON.parse(localStorage.getItem("storedTasks") || "[]");
 }  
})

onUnmounted(() => {
  localStorage.removeItem("storedTasks");
  localStorage.setItem("storedTasks", JSON.stringify(tasks.value));
})

// watchers
watch(tasks, (newTasks, oldTasks) =>{
  if(taskFilter.value == "all"){
    let newUpdatedTasks = newTasks
    if(searching){
      newTasks = newTasks.filter(task => task.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
    }
    taskList.value = newUpdatedTasks;
  }
  if(taskFilter.value == "pending"){
    let newUpdatedTasks = newTasks.filter(task => task.completed != true);
    if(searching){
      newTasks = newTasks.filter(task => task.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
    }
    taskList.value = newUpdatedTasks;
  }
  if(taskFilter.value == "completed"){
    let newUpdatedTasks = newTasks.filter(task => task.completed == true);
    if(searching){
      newTasks = newTasks.filter(task => task.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
    }
    taskList.value = newUpdatedTasks;
  }
})

watch(taskFilter, (newFilter, oldFilter) =>{
  if(newFilter == "all"){
    let newTasks = tasks.value;
    if(searching){
      newTasks = newTasks.filter(task => task.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
    }
    taskList.value = newTasks;
  }
  if(newFilter == "pending"){
    let newTasks = tasks.value.filter(task => task.completed != true);
    if(searching){
      newTasks = newTasks.filter(task => task.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
    }
    taskList.value = newTasks;
  }
  if(newFilter == "completed"){
    let newTasks = tasks.value.filter(task => task.completed == true);
    if(searching){
      newTasks = newTasks.filter(task => task.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
    }
    taskList.value = newTasks;
  }
})

watch(searchTerm, (newSearchTerm, oldSearchTerm) =>{
  if(newSearchTerm != ""){
    searching.value = true;

    if(taskFilter.value == "all"){
      let newTasks = tasks.value;
      newTasks = newTasks.filter(task => task.name.toLowerCase().includes(newSearchTerm.toLowerCase()));
      taskList.value = newTasks;
    }
    if(taskFilter.value == "pending"){
      let newTasks = tasks.value.filter(task => task.completed != true);
      newTasks = newTasks.filter(task => task.name.toLowerCase().includes(newSearchTerm.toLowerCase()));
      taskList.value = newTasks;
    }
    if(taskFilter.value == "completed"){
      let newTasks = tasks.value.filter(task => task.completed == true);
      newTasks = newTasks.filter(task => task.name.toLowerCase().includes(newSearchTerm.toLowerCase()));
      taskList.value = newTasks;
    }
    }else{
      searching.value = false;
      if(taskFilter.value == "all"){
          taskList.value = tasks.value;
      }
      if(taskFilter.value == "pending"){
          taskList.value = tasks.value.filter(task => task.completed != true);
      }
      if(taskFilter.value == "completed"){
          taskList.value = tasks.value.filter(task => task.completed == true);
      }
    } 
})

// functions
const handleTaskUpdate = () =>{
  if(taskFilter.value == "all"){
    let newTasks = tasks.value;
    if(searching){
      newTasks = newTasks.filter(task => task.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
    }
    taskList.value = newTasks;
  }
  if(taskFilter.value == "pending"){
    let newTasks = tasks.value.filter(task => task.completed != true);
    if(searching){
      newTasks = newTasks.filter(task => task.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
    }
    taskList.value = newTasks;
  }
  if(taskFilter.value == "completed"){
    let newTasks = tasks.value.filter(task => task.completed == true);
    if(searching){
      newTasks = newTasks.filter(task => task.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
    }
    taskList.value = newTasks;
  }
}

</script>

<template>
  <section class="tasklist">
    <div :v-if="tasks.length > 0">
      <ul>
      <li v-for="task in taskList" :key="task.id">
        <Task :task="task" @taskCompleted="handleTaskUpdate"/>      
      </li>          
    </ul>
    </div>
    <div v-if="taskList.length <= 0">
      <h2 v-if="taskFilter == 'all' && !searching" class="emptyList">
        The Task List is empty.
      </h2>
      <h2 v-if="taskFilter == 'all' && searching" class="emptyList">
        The Task List does not have tasks that contain: {{ searchTerm }}.
      </h2>
      <h2 v-if="taskFilter == 'pending' && !searching" class="emptyList">
        There are no pending Tasks.
      </h2>
      <h2 v-if="taskFilter == 'pending' && searching" class="emptyList">
        The Task List does not have pending tasks that contain: {{ searchTerm }}.
      </h2>
      <h2 v-if="taskFilter == 'completed' && !searching" class="emptyList">
        There are no completed Tasks.
      </h2>
      <h2 v-if="taskFilter == 'completed' && searching" class="emptyList">
        The Task List does not have completed tasks that contain: {{ searchTerm }}.
      </h2>
    </div>    
  </section>
</template>

<style scoped>
.tasklist{
  padding: 8px 2px;
  width: 80%;
  margin: auto;
  border-radius: 4px;
}

.tasklist .tasklist-header{
  text-decoration: underline;
  padding: 4px;
  margin-bottom: 15px;
}

ul{
  width: 100%;
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


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .tasklist{
        width: 100%;
    } 
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .tasklist{
        width: 100%;
    } 
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .tasklist{
        width: 90%;
    } 
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .tasklist{
        width: 80%;
    } 
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .tasklist{
        width: 70%;
    } 
}
</style>