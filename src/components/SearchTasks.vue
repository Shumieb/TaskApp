<script setup>
import { defineModel, ref } from "vue";
import { useTaskStore } from '@/stores/TaskStore';

// values from store
const store = useTaskStore()
const { updateSearchTerm } = store;

// variables and models
const displayErrorMsg = ref(false);
const errorMsg = ref("");
const inputValue = defineModel();

// events
const emit = defineEmits(['hideSearchForm'])

// functions
const handleSubmit = () => {
    if (inputValue.value !== undefined) {
        updateSearchTerm(inputValue.value);        
        console.log(inputValue.value);
        inputValue.value="";
        emit('hideSearchForm');
    }else{
        errorMsg.value = "please enter a search term"
        displayErrorMsg.value = true;
  }
};

const hideErrorMsg = () => {     
    displayErrorMsg.value = false;
    errorMsg.value = "";
};
</script>

<template>
    <div class="modal">
        <section class="modal-content"> 
            <span class="close" @click="() => emit('hideSearchForm')">&times;</span>
            <h2 class="modalHeader">Search Tasks</h2>
            <span class="hr"><hr></span>       
            <form class="search-form" @submit.prevent="handleSubmit" autocomplete="off">
                <input
                    class="search-input"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    v-model="inputValue"
                    @focus="hideErrorMsg"
                />
                <input type="submit" value="Search" class="submitBtn" />
                <p class="errorMsg" v-if="displayErrorMsg">{{ errorMsg }}</p>
            </form>   
        </section> 
  </div>
</template>

<style scoped>
.modal{
    display: block; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: peachpuff;
  padding: 12px 16px;
  width: 50%;
  height: 50vh;
  margin: 10% auto; 
  border-radius: 4px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
  text-align: center;
}

.modal-content:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 6px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 30px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modalHeader{
    margin-top: 30px;
    font-size: 22px;
    padding: 6px 16px;
}

.hr hr{
    margin: auto;
    width: 140px;
    border: 2px solid black;
    border-radius: 4px;
    margin-bottom: 10px;
}

.search-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 35px;
    padding: 4px 8px;
}

.search-form .search-input {
    padding: 8px;
    outline: none;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 18px;
    width: 50%;
    margin: auto;
}

.search-form .submitBtn {
    padding: 8px 16px;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    background-color: white;
}

.errorMsg{
    font-size: 18px;
    color: brown;
    font-style: italic;
    padding: 8px;
    text-transform: capitalize;
}
</style>