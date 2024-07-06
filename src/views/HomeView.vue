<script setup>
import { ref } from "vue";
import { storeToRefs } from 'pinia'
import AddSearchBtns from "@/components/AddSearchBtns.vue";
import TaskList from "@/components/TaskList.vue";
import EditTask from "@/components/EditTask.vue";
import AddTask from "@/components/AddTask.vue";
import SearchTasks from "@/components/SearchTasks.vue";
import FilterTasks from "@/components/FilterTasks.vue";
import { useTaskStore } from '@/stores/TaskStore'

// variables
const displayAddTaskForm = ref(false);
const displaySearchForm = ref(false)

// values from store
const store = useTaskStore()
const { displayEditForm } = storeToRefs(store)

// functions
const showHideAddTaskForm = () =>{
  displayAddTaskForm.value = !displayAddTaskForm.value
}

const showHideSearchForm = () =>{
  displaySearchForm.value = !displaySearchForm.value
}
</script>

<template>
    <main class="main-container">    
        <AddSearchBtns 
          :showHideAddTaskForm="showHideAddTaskForm" 
          :showHideSearchForm="showHideSearchForm"
        />
        <FilterTasks/>
        <TaskList />
    </main>
    <EditTask v-if="displayEditForm" />
    <AddTask 
      v-if="displayAddTaskForm" 
      @hideAddTaskForm="showHideAddTaskForm"
    />
    <SearchTasks 
      v-if="displaySearchForm" 
      @hideSearchForm="showHideSearchForm"
    />
</template>

