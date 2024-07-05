<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/TaskStore';
import DisplaySearchTerm from "@/components/DisplaySearchTerm.vue";

// props
const props = defineProps(["showHideAddTaskForm", "showHideSearchForm"])

// values from store
const store = useTaskStore()
const { searchTerm } = storeToRefs(store);
const { updateSearchTerm } = store;

// variable
const showSearchTerm = ref(false);

// watchers
watch(searchTerm, (newSearchTerm, oldSearchTerm) => {
  if(newSearchTerm.length > 0){
      showSearchTerm.value = true;
    } 
});

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
  background-color: peachpuff;
  border: 2px solid peachpuff;
  border-radius: 4px;
  font-size: 16px;
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
</style>