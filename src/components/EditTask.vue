<script setup>
import { useTaskStore } from '@/stores/TaskStore'
import { storeToRefs } from 'pinia'

// values from store
const store = useTaskStore()
const { taskToEdit  } = storeToRefs(store)
const { editTask, closeEditModal, getTaskToEdit } = store

// models
const inputValue = defineModel();
inputValue.value = getTaskToEdit.name;

// functions
const handleTaskEdit = (task) =>{
    let editedTask = {
        "id": task.id,  
        "name": inputValue.value,
        "completed": task.completed,
        "markForDeletion": task.markForDeletion
    }
    editTask(editedTask);
    inputValue.value = "";
}
</script>

<template>
    <main class="modal">
        <div class="modal-content">
            <span class="close" @click="closeEditModal">&times;</span>
            <h2 class="modal-header">Edit Task</h2>
            <span class="hr"><hr></span> 
            <form class="edit-form" @submit.prevent="() => handleTaskEdit(taskToEdit)" autocomplete="off">
                <input
                    class="edit-input"
                    type="text"
                    name="edit"
                    id="edit"
                    v-model="inputValue"
                />
                <input type="submit" class="editBtn" value="Edit" />
            </form>
        </div>
    </main>
</template>

<style scoped>
.modal {
  display: block; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}

.modal-content {
    background-color: peachpuff;
    padding: 12px 16px;
    width: 50%;
    height: 50vh;
    margin: 10% auto; 
    border-radius: 4px;
    margin-bottom: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
    text-align: center;
}

.modal-content:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 6px;
}

.modal-header{
    margin-top: 30px;
    font-size: 22px;
    padding: 6px 16px;
}

.hr hr{
    margin: auto;
    width: 100px;
    border: 2px solid black;
    border-radius: 4px;
    margin-bottom: 10px;
}

.edit-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 35px;
    padding: 4px 8px;
}

.edit-input{
    padding: 8px;
    outline: none;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 18px;
    width: 50%;
    margin: auto;
}

.editBtn{
    padding: 8px 16px;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    background-color: white;
}

.close {
  color: #aaa;
  float: right;
  font-size: 30px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

</style>