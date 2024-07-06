<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/TaskStore';
import DisplaySearchTerm from "@/components/DisplaySearchTerm.vue";

// props
const props = defineProps(["showHideAddTaskForm", "showHideSearchForm"])

// values from store
const store = useTaskStore()
const { searchTerm } = storeToRefs(store)
const { updateSearchTerm } = store

// variable
const showSearchTerm = ref(false);

// watchers
watch(searchTerm, (newTerm, oldTerm)=>{
  if(newTerm){
    showSearchTerm.value = true;
  }
})

// function
const clearSearchTerm = () =>{
  updateSearchTerm("");
  showSearchTerm.value = false;
}

</script>

<template>
  <section>
    <DisplaySearchTerm :showSearchTerm="showSearchTerm"/>
    <div class="btn-sect">
      <button
        class="btn"
        @click="props.showHideAddTaskForm"
        v-if="!showSearchTerm"
      >
        Add New Task
      </button>
      <button
        class="btn"
        @click="props.showHideSearchForm"
        v-if="!showSearchTerm"
      >
        Search 
      </button>
      <button
        class="btn btn-danger"
        v-if="showSearchTerm"
        @click="clearSearchTerm"
      >
        Clear Search 
      </button>
    </div>        
  </section>
</template>

<style scoped>
section {
  padding: 4px;
  width: 50%;
  margin: auto;
  border-radius: 4px;
  margin-bottom: 10px;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  color: #024959;
}

.btn-sect {
  padding: 6px 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
}

.btn {
  padding: 4px 12px;
  cursor: pointer;
  background-color: #FFCB9A;
  border: 2px solid #FFCB9A;
  border-radius: 4px;
  font-size: 16px;
  color: #024959;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
}

.btn:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 6px;
}

.btn-danger{
  border-color: brown;
  background-color: brown;
  color: white;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  section{
        width: 100%;
    } 
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  section{
        width: 100%;
    } 
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  section{
        width: 90%;
    } 
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  section{
        width: 80%;
    } 
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  section{
        width: 70%;
    } 
}
</style>