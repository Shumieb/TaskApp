<script setup>
import { ref } from "vue";
import AddSearch from "@/components/AddSearch.vue";
import TaskList from "@/components/TaskList.vue";
import { taskData } from "@/assets/data";

const tasks = ref(taskData)

const addTask = (task) =>{
  if(task.length > 0){
    let newId= tasks.value.length + 1;

    let newTask = { 
    "id": newId,
    "name": task,
    "completed": false,
    "markForDeletion": false }

    tasks.value.push(newTask);
  }
  
}

const handleEdit = (id) =>{
    console.log(id);
}

const handleComplete = (id)=>{
    console.log(id);
}

const handleDelete = (id) =>{
    console.log(id);
}

</script>

<template>
  <main class="main-container">
    <AddSearch :addTask="addTask"/>
    <TaskList 
      :tasks="tasks" 
      :handleEdit="handleEdit" 
      :handleComplete="handleComplete"
      :handleDelete="handleDelete"
    />
  </main>
</template>

