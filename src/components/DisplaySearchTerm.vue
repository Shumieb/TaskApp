<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/TaskStore';

// props
const props = defineProps(["showSearchTerm"])

// values from store
const store = useTaskStore()
const { searchTerm } = storeToRefs(store)

</script>

<template>
    <div>
        <h2 v-if="showSearchTerm" class="searchValue">
            Searching for: <span class="name">{{ searchTerm }}</span>
        </h2>
    </div>    
</template>

<style scoped>

.searchValue{
    font-size: 22px;
    color: white;
}

.searchValue .name{
    text-transform: capitalize;
    font-style: italic;
}

</style>