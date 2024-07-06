<script setup>
import Task from './Task.vue';
import { taskData } from "@/assets/data";
import { useTaskStore } from '@/stores/TaskStore';
import { storeToRefs } from 'pinia';
import { ref, watch, onMounted } from 'vue';

// values from store
const store = useTaskStore()
const { taskFilter, tasks, searchTerm } = storeToRefs(store)

// variables
const taskList = ref([]);
const searching = ref(false);

// lifecycle
onMounted(() => {
  taskList.value = taskData;
  tasks.value = taskData;
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