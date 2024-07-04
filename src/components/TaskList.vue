<script setup>
import Task from './Task.vue'

import { useTaskStore } from '@/stores/TaskStore'
import { ref, watch } from 'vue';

const store = useTaskStore()
const { getTaskFilter, 
        changeTaskFilter, 
        getCompletedTasks, 
        getAllTasks, 
        getPendingTasks 
      } = store

const filterByCompletion = ref(getTaskFilter);
const taskList = ref(getAllTasks);

watch(filterByCompletion, ()=>{
    changeTaskFilter(filterByCompletion.value)
    if(filterByCompletion.value == "all"){
      taskList.value = getAllTasks;
    }else if(filterByCompletion.value == "completed"){
      taskList.value = getCompletedTasks;
    }else if(filterByCompletion.value == "pending"){
      taskList.value = getPendingTasks;
    }
})

</script>

<template>
  <section class="tasklist">
    <h2 class="tasklist-header">Tasks</h2>
    {{ filterByCompletion }}
    <div class="filterBtns">
      <div class="filterBtn-group">
        <input type="radio" v-model="filterByCompletion" value="all" id="all"/>
        <label for="all">All</label>
      </div>
      <div class="filterBtn-group">
        <input type="radio" v-model="filterByCompletion" value="pending" id="pending"/>
        <label for="pending">Pending</label>
      </div>
      <div class="filterBtn-group">
        <input type="radio" v-model="filterByCompletion" value="completed" id="completed"/>
        <label for="completed">Completed</label>
      </div>     
    </div>
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

.filterBtns{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  margin: auto;
  padding: 8px 4px;
  font-size: 17px;
  gap: 15px;
}

.filterBtn-group{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.filterBtn-group input{
  cursor: pointer;
}

ul{
  width: 50%;
  margin: auto;
}
</style>