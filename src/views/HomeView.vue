<script setup>
import { ref } from "vue";
import AddSearch from "@/components/AddSearch.vue";
import TaskList from "@/components/TaskList.vue";
import { taskData } from "@/assets/data";
import EditTask from "@/components/EditTask.vue"

const tasks = ref(taskData)
const displayEditFrom = ref(false)
const taskToEdit = ref({})

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
  tasks.value.map(task =>{
    if(task.id === id){
      task.completed = !task.completed;
    }
  })
}

const handleDelete = (id) =>{
  let newTasks = tasks.value.filter(task => task.id !== id);
  tasks.value = newTasks;
}

const showEditForm = (id) =>{
  taskToEdit.value = tasks.value.find(task => task.id == id);
  displayEditFrom.value = true;
  console.log(taskToEdit.value);
}
</script>

<template>
  <main class="main-container">
    <AddSearch :addTask="addTask"/>
    <TaskList 
      :tasks="tasks" 
      :handleComplete="handleComplete"
      :handleDelete="handleDelete"
      :showEditForm="showEditForm"
    />
  </main>
  <EditTask v-if="displayEditFrom" :handleEdit="handleComplete" :taskToEdit="taskToEdit"/>
</template>

