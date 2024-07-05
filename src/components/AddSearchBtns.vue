<script setup>
// props
const props = defineProps(["showHideAddTaskForm", "showHideSearchForm"])
</script>

<template>
  <section>
    <div class="btn-sect">
      <button
        class="btn"
        @click="props.showHideAddTaskForm"
      >
        Add New Task
      </button>
      <button
        class="btn"
        @click="props.showHideSearchForm"
      >
        Search 
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
</style>