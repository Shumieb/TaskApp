<script setup>
import { useTaskStore } from '@/stores/TaskStore'

// values from store
const store = useTaskStore()
const { editTaskCompleted, showEditModal, deleteTask, updateTaskToEdit } = store

// props
const props = defineProps(["task"])

// events
const emit = defineEmits(['taskCompleted']);

// functions
const handleEdit = () =>{
    updateTaskToEdit(props.task.id);
    showEditModal(props.task.id);
}

const handleComplete = () =>{
    editTaskCompleted(props.task.id);
    emit("taskCompleted");
}

</script>

<template>
    <div class="task">
        <div class="textSect">
            <label class="task-check task-name">{{props.task.name}}
                <input 
                type="checkbox" 
                :name="props.task.name" 
                :checked="props.task.completed"  
                @click="handleComplete">
                <span class="checkmark"></span>
            </label>
        </div>        
        <div class="btnSect">
          <button class="btn edit-btn" @click="handleEdit">Edit</button>
          <button class="btn delete-btn" @click="() => deleteTask(props.task.id)">Delete</button>
        </div>
    </div>
</template>

<style scoped>
.task{
    background-color: #ed9192;
    width: 100%;
    border: 2px solid #ed9192;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
    color: #024959;
}

.task:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 6px;
}

.textSect{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}

.task-name{
    text-transform: capitalize;
}

.btnSect{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
}

.btn {
  padding: 4px 12px;
  cursor: pointer;
  border: 1px solid black;
  background-color: white;
  border-radius: 4px;
  font-size: 15px;
}

.btn:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
}

.edit-btn{
    background-color: #024959;
    border: 2px solid #024959;
    color: #fff3f0;
}

.delete-btn{
    background-color: brown;
    border: 2px solid brown;
    color: #fff3f0;
}

/* The container */
.task-check {
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.task-check input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.task-check .checkmark {
  position: absolute;
  top: 2px;
  left: 2px;
  height: 18px;
  width: 18px;
  background-color: #026773;
  border-radius: 3px;
}

/* On mouse-over, add a grey background color */
.task-check:hover input ~ .checkmark {
  background-color: #3CA6A6;
}

/* When the checkbox is checked, add a blue background */
.task-check input:checked ~ .checkmark {
  background-color: #024959;
}

/* Create the checkmark/indicator (hidden when not checked) */
.task-check .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.task-check input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.task-check .checkmark:after {
  left: 6.5px;
  top: 2.8px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>