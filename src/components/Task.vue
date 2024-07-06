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
            <input 
                type="checkbox" 
                :name="props.task.name" 
                :checked="props.task.completed"  
                @click="handleComplete">
            <p class="task-name">{{props.task.name}}</p>
        </div>        
        <div class="btnSect">
          <button class="btn edit-btn" @click="handleEdit">Edit</button>
          <button class="btn delete-btn" @click="() => deleteTask(props.task.id)">Delete</button>
        </div>
    </div>
</template>

<style scoped>
.task{
    background-color: #FFCB9A;
    width: 100%;
    border: 2px solid #FFCB9A;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
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
    color: #FFCB9A;
}

.delete-btn{
    background-color: brown;
    border: 2px solid brown;
    color: white;
}
</style>