<script setup>
import { ref } from "vue";
import AddSearch from "@/components/AddSearch.vue";
import TaskList from "@/components/TaskList.vue";
//import { taskData } from "@/assets/data";
import EditTask from "@/components/EditTask.vue"

import { useTaskStore } from '@/stores/TaskStore'
import { storeToRefs } from 'pinia'

//const tasks = ref(taskData)
//const displayEditFrom = ref(false)
//const taskToEdit = ref({})

const store = useTaskStore()
const { displayEditFrom } = storeToRefs(store)

/*
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


const editTask = (editedTask) =>{ 
  tasks.value.map(task =>{
    if(task.id === editedTask.id){
      task.name = editedTask.name;
      task.completed = editedTask.completed;
      task.markForDeletion = editedTask.markForDeletion;
    }
  })
  closeEditModal();
}

const closeEditModal = ()=>{
  displayEditFrom.value = !displayEditFrom.value;
}

const completeTask = (id)=>{
  tasks.value.map(task =>{
    if(task.id === id){
      task.completed = !task.completed;
    }
  })
}

const deleteTask = (id) =>{
  let newTasks = tasks.value.filter(task => task.id !== id);
  tasks.value = newTasks;
}

const showEditForm = (id) =>{
  taskToEdit.value = tasks.value.find(task => task.id == id);
  displayEditFrom.value = true;
}

*/

</script>

<template>
  <main class="main-container">
    <AddSearch />
    <TaskList />
  </main>
  <EditTask v-if="displayEditFrom" />
</template>

