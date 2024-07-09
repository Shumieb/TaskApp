<script setup>
import { useTaskStore } from '@/stores/TaskStore'
import { storeToRefs } from 'pinia'

// values from store
const store = useTaskStore()
const { taskToEdit } = storeToRefs(store)
const { closeEditModal, editTaskName } = store

// models
const inputValue = defineModel();
inputValue.value = taskToEdit.value.name;

// functions
const handleTaskEdit = () =>{  
    editTaskName(taskToEdit.value.id, inputValue.value)
    inputValue.value = "";
    closeEditModal();
}
</script>

<template>
    <main class="modal">
        <div class="modal-content">
            <span class="close" @click="closeEditModal">&times;</span>
            <h2 class="modal-header">Edit Task</h2>
            <span class="hr"><hr></span> 
            <form class="edit-form" @submit.prevent="() => handleTaskEdit()" autocomplete="off">
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
  background-color: rgba(0,0,0,0.4); 
}

.modal-content {
    background-color: #ffb5b6;
    padding: 12px 16px;
    width: 50%;
    height: 60vh;
    margin: 10% auto; 
    border-radius: 4px;
    margin-bottom: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
    text-align: center;
    color: #024959;
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
    border: 2px solid #024959;
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
    border: 2px solid #024959;
    border-radius: 4px;
    font-size: 18px;
    width: 50%;
    margin: auto;
    color: #024959;
    margin-bottom: 15px;
    background-color: #fff3f0;
}

.editBtn{
    padding: 8px 16px;
    border: 2px solid #024959;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    background-color: #024959;
    color: #fff3f0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
}

.close {
  color: brown;
  float: right;
  font-size: 30px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #aaa;
  text-decoration: none;
  cursor: pointer;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .modal-content{
        width: 90%;
        margin: 20% auto; 
    } 
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .modal-content{
        width: 90%;
        margin: 20% auto; 
    } 
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .modal-content{
        width: 80%;
        margin: 15% auto; 
    } 
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .modal-content{
        width: 70%;
        margin: 10% auto; 
    } 
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .modal-content{
        width: 60%;
        margin: 10% auto; 
    } 
}

</style>