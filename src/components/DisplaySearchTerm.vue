<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/TaskStore';

// props
const props = defineProps(["showSearchTerm"])

// values from store
const store = useTaskStore()
const { searchTerm } = storeToRefs(store);

// variables
const searchTermValue = ref("");

// watchers
watch(searchTerm, (newSearchTerm, oldSearchTerm) => {
    if(newSearchTerm.length > 0){
        searchTermValue.value = newSearchTerm; 
    }     
});

</script>

<template>
    <div>
        <h2 v-if="showSearchTerm" class="searchValue">Searching for: <span class="name">{{ searchTermValue }}</span></h2>
    </div>    
</template>

<style scoped>
.searchValue{
    font-size: 22px;
}

.searchValue .name{
    text-transform: capitalize;
    font-style: italic;
}

</style>