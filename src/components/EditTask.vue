<script setup>
import { useTaskStore } from '@/stores/TaskStore'
import { storeToRefs } from 'pinia'

const store = useTaskStore()
const { taskToEdit  } = storeToRefs(store)
const { editTask, closeEditModal, getTaskToEdit } = store

const inputValue = defineModel();
inputValue.value = getTaskToEdit.name;

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
  background-color: #fefefe;
  margin: 8% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  height: 50%; 
}

.modal-header{
    text-align: center;
    margin-top: 22px;
    margin-bottom: 22px;
    text-decoration: underline;
}

form{
    text-align: center;
    margin-top: 5px;
    margin-bottom: 20px;
    padding: 4px 8px;
}

.edit-input{
    padding: 4px 6px;
    outline: none;
    border: 1px solid black;
    border-radius: 4px 0px 0px 4px;
    font-size: 16px;
    width: 50%;
    margin: auto;
}

.editBtn{
    padding: 4px 6px;
    width: 100px;
    border: 1px solid black;
    border-radius: 0px 4px 4px 0px;
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