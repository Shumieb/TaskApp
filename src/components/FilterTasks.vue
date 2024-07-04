<script setup>
import { useTaskStore } from '@/stores/TaskStore'
import { ref, watch } from 'vue';

const store = useTaskStore()
const { getTaskFilter, changeTaskFilter } = store

const filterByCompletion = ref(getTaskFilter);

watch(filterByCompletion, ()=>{
    changeTaskFilter(filterByCompletion.value)
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
  padding: 8px 4px;
  font-size: 17px;
  gap: 15px;
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
</style>