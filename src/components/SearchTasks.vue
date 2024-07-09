<script setup>
import { ref } from "vue";
import { useTaskStore } from '@/stores/TaskStore';
import { storeToRefs } from 'pinia'

// values from store
const store = useTaskStore()
const { updateSearchTerm } = store
const { searchTerm } = storeToRefs(store)

// variables and models
const displayErrorMsg = ref(false);
const errorMsg = ref("");
const inputValue = defineModel();
inputValue.value = searchTerm.value;

// events
const emit = defineEmits(['hideSearchForm'])

// functions
const handleSubmit = () => {
    if (inputValue.value !== "") {   
        updateSearchTerm(inputValue.value);   
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
    background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #ffb5b6;
  padding: 12px 16px;
  width: 50%;
  height: 60vh;
  margin: 10% auto; 
  border-radius: 4px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
  text-align: center;
  color: #024959;
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
  color: brown;
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
    width: 120px;
    border: 2px solid #024959;
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
    border: 2px solid #024959;
    border-radius: 4px;
    font-size: 18px;
    width: 50%;
    margin: auto;
    color: #024959;
    margin-bottom: 15px;
    background-color: #fff3f0;
}

.search-form .submitBtn {
    padding: 8px 16px;
    border: 2px solid #024959;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    background-color: #024959;
    color: #fff3f0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 4px;
}

.errorMsg{
    font-size: 19px;
    color: brown;
    font-style: italic;
    padding: 8px;
    text-transform: capitalize;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .modal-content{
        width: 90%;
        margin: 20% auto; 
    } 
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .modal-content{
        width: 90%;
        margin: 20% auto; 
    } 
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .modal-content{
        width: 80%;
        margin: 15% auto; 
    } 
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .modal-content{
        width: 70%;
        margin: 10% auto; 
    } 
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .modal-content{
        width: 60%;
        margin: 10% auto; 
    } 
}

</style>