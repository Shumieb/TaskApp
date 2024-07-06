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
        <label for="all" class="container">All
          <input type="radio" v-model="filterByCompletion" value="all" id="all"/>
          <span class="checkmark"></span>
        </label>        
      </div>
      <div class="filterBtn-group">
        <label for="pending" class="container">Pending
          <input type="radio" v-model="filterByCompletion" value="pending" id="pending"/>
          <span class="checkmark"></span>
        </label>       
      </div>
      <div class="filterBtn-group">
        <label for="completed" class="container">Completed
          <input type="radio" v-model="filterByCompletion" value="completed" id="completed"/>
          <span class="checkmark"></span>
        </label>        
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

/* The container */
.filterBtn-group .container {
  display: block;
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 20px;
}

/* Hide the browser's default radio button */
.filterBtn-group .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.filterBtn-group .checkmark {
  position: absolute;
  top: 3px;
  left: 0px;
  height: 16px;
  width: 16px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.filterBtn-group .container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.filterBtn-group .container input:checked ~ .checkmark {
  background-color: white;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.filterBtn-group .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.filterBtn-group .container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.filterBtn-group .container .checkmark:after {
 	top: 3px;
	left: 2.8px;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #024959;
}

</style>