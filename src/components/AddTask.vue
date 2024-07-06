<script setup>
import { ref } from "vue";
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/TaskStore';

// values from store
const store = useTaskStore()
const { updateTaskFilter } = store
const { tasks } = storeToRefs(store)

// variables and models
const displayErrorMsg = ref(false);
const errorMsg = ref("");
const inputValue = defineModel();

// events
const emit = defineEmits(['hideAddTaskForm'])

// functions
const handleSubmit = () => {
  if (inputValue.value !== undefined) {     
        let newId = tasks.value.length + Math.random();
        let newTask = {
            "id": newId,
            "name": inputValue.value,
            "completed": false,
            "markForDeletion": false
        }
        tasks.value.push(newTask);
        updateTaskFilter("all");
    
      //addTask(inputValue.value);
      inputValue.value="";
      emit('hideAddTaskForm');
  }else{
    errorMsg.value = "please enter a new task"
    displayErrorMsg.value = true;
  }  
};

const hideErrorMsg = () => {     
    displayErrorMsg.value = false;
    errorMsg.value = "";
};
</script>

<template>
    <div class="modal">
        <section class="modal-content">
            <span class="close" @click="() => emit('hideAddTaskForm')">&times;</span>
            <h2 class="modalHeader">Add New Task</h2>
            <span class="hr"><hr></span>    
                <form class="add-form" @submit.prevent="handleSubmit" autocomplete="off">
                    <input
                        class="add-input"
                        type="text"
                        name="add-task"
                        id="add-task"
                        placeholder="New Task"
                        v-model="inputValue"
                        @focus="hideErrorMsg"
                    />
                    <input type="submit" value="Add New Task" class="submitBtn" />
                    <p class="errorMsg" v-if="displayErrorMsg">{{ errorMsg }}</p>
                </form>
        </section>
    </div>  
</template>

<style scoped>
.modal{
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
  background-color: #FFCB9A;
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

.modalHeader{
    margin-top: 30px;
    font-size: 22px;
    padding: 6px 16px;
}

.hr hr{
    margin: auto;
    width: 135px;
    border: 2px solid #024959;
    border-radius: 4px;
    margin-bottom: 10px;
}

.add-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 35px;
    padding: 4px 8px;
}

.add-form .add-input {
  padding: 8px;
  outline: none;
  border: 2px solid #024959;
  border-radius: 4px;
  font-size: 18px;
  width: 50%;
  margin: auto;
  color: #024959;
  margin-bottom: 15px;
}

.add-form .submitBtn {
  padding: 8px 16px;
  border: 2px solid #024959;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: #024959;
  color: #FFCB9A;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
}

.submitBtn:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 6px;
}

.errorMsg{
    font-size: 19px;
    color: brown;
    font-style: italic;
    padding: 8px;
    text-transform: capitalize;
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