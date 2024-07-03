<script setup>
import { ref, defineModel } from "vue";
import { capitalizeFirstLetter } from "../assets/utils";

const selected = ref("add");
const disabled = ref(selected.value);
const placeholder = ref(capitalizeFirstLetter(selected.value));
const submitBtn = ref(capitalizeFirstLetter(selected.value));

const inputValue = defineModel();

const handleBtnSwitch = (value) => {
  selected.value = value;
  disabled.value = selected.value;
  placeholder.value = capitalizeFirstLetter(selected.value);
  submitBtn.value = capitalizeFirstLetter(selected.value);
};

const handleSubmit = () => {
  if (selected.value == "add" && inputValue.value !== undefined) {
    console.log(inputValue.value + " - " + selected.value);
  }
  if (selected.value == "search" && inputValue.value !== undefined) {
    console.log(inputValue.value + " - " + selected.value);
  }
};
</script>

<template>
  <section>
    <div class="btn-sect">
      <button
        class="btn"
        :disabled="disabled == 'add'"
        @click="(e) => handleBtnSwitch('add')"
      >
        Add
      </button>
      <button
        class="btn"
        :disabled="disabled == 'search'"
        @click="(e) => handleBtnSwitch('search')"
      >
        Search
      </button>
    </div>
    <div>
      <form class="add-search-form" @submit.prevent="handleSubmit">
        <input
          class="add-search-input"
          type="text"
          name="add-search"
          id="add-search"
          :placeholder="placeholder"
          v-model="inputValue"
        />
        <input type="submit" :value="submitBtn" class="submitBtn" />
      </form>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: peachpuff;
  padding: 10px 12px;
  width: 50%;
  margin: auto;
  border-radius: 4px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
}

section:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 6px;
}

.btn-sect {
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
}

.btn {
  padding: 4px 12px;
  cursor: pointer;
  border: 2px solid black;
  background-color: white;
  border-radius: 4px;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
}

.btn:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 6px;
}

.add-search-form {
  margin-top: 5px;
  padding: 4px 8px;
}

.add-search-form .add-search-input {
  padding: 4px 6px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px 0px 0px 4px;
  font-size: 16px;
  width: 50%;
  margin: auto;
}

.add-search-form .submitBtn {
  padding: 4px 6px;
  width: 100px;
  border: 1px solid black;
  border-radius: 0px 4px 4px 0px;
  font-size: 16px;
  cursor: pointer;
  background-color: white;
}
</style>