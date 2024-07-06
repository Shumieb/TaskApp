<script setup>
import { useTaskStore } from '@/stores/TaskStore'
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

// values from store
const store = useTaskStore()
const { taskFilter } = storeToRefs(store)
const { updateTaskFilter } = store

// variables
const filterByCompletion = ref(taskFilter);

// watchers
watch(filterByCompletion, (newFilterByCompletion, oldFilterByCompletion)=>{
  if(newFilterByCompletion){
    updateTaskFilter(filterByCompletion.value);
  }    
})
</script>

<template>
    <div class="filterBtns">
      <div class="filterBtn-group">
        <input type="radio" v-model="filterByCompletion" value="all" id="all"/>
        <label for="all">All</label>
      </div>
      <div class="filterBtn-group">
        <input type="radio" v-model="filterByCompletion" value="pending" id="pending"/>
        <label for="pending">Pending</label>
      </div>
      <div class="filterBtn-group">
        <input type="radio" v-model="filterByCompletion" value="completed" id="completed"/>
        <label for="completed">Completed</label>
      </div>     
    </div>    
</template>

<style scoped>
.filterBtns{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  margin: auto;
  padding: 8px 16px;
  font-size: 17px;
  gap: 15px;
  background-color: #8FC1B5;
  margin-bottom: 10px;
  border: 2px solid #8FC1B5;
  border-radius: 4px;
  color: #024959;
}

.filterBtn-group{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.filterBtn-group input{
  cursor: pointer;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .filterBtns{
        width: 100%;
    } 
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .filterBtns{
        width: 100%;
    } 
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .filterBtns{
        width: 90%;
    } 
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .filterBtns{
        width: 80%;
    } 
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .filterBtns{
        width: 70%;
    } 
}
</style>