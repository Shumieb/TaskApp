<script setup>
import { useTaskStore } from '@/stores/TaskStore'

// values from store
const store = useTaskStore()
const { completeTask, deleteTask, showEditForm} = store

// props
const props = defineProps(["task"])

// events
const emit = defineEmits(['taskUpdated'])

// functions
const handleComplete = (id) =>{
    completeTask(id);   
    emit("taskUpdated"); 
}
</script>

<template>
    <div class="task">
        <div class="textSect">
            <input 
                type="checkbox" 
                :name="props.task.name" 
                :checked="props.task.completed"  
                @click="() => handleComplete(props.task.id)">
            <p class="task-name">{{props.task.name}}</p>
        </div>        
        <div class="btnSect">
          <button class="btn" @click="()=>showEditForm(props.task.id)">Edit</button>
          <button class="btn" @click="()=>deleteTask(props.task.id)">Delete</button>
        </div>
    </div>
</template>

<style scoped>
.task{
    background-color: peachpuff;
    width: 100%;
    border: 2px solid peachpuff;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
}

.btn:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 6px;
}
</style>