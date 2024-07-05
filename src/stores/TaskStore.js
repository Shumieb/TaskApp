import { taskData } from "@/assets/data";
import { defineStore } from 'pinia'
import { ref, computed } from "vue";

export const useTaskStore = defineStore('myTask', () => {
    // state properties
    const tasks = ref(taskData);
    const displayEditFrom = ref(false);
    const taskToEdit = ref({});
    const taskFilter = ref("all");
    const searchTerm = ref("");

    // getters
    const getAllTasks = computed(() => {
        return tasks.value;
    })

    const getTaskToEdit = computed(() => {
        return taskToEdit.value;
    })

    const getTaskFilter = computed(() => {
        return taskFilter.value;
    })

    const getSearchTerm = computed(() => {
        return searchTerm.value;
    })

    // actions
    function addTask(task) {
        if (task.length > 0) {
            let newId = tasks.value.length + 1;

            let newTask = {
                "id": newId,
                "name": task,
                "completed": false,
                "markForDeletion": false
            }

            tasks.value.push(newTask);
        }
    }

    function editTask(editedTask) {
        tasks.value.map(task => {
            if (task.id === editedTask.id) {
                task.name = editedTask.name;
                task.completed = editedTask.completed;
                task.markForDeletion = editedTask.markForDeletion;
            }
        })
        closeEditModal();
    }

    function closeEditModal() {
        displayEditFrom.value = !displayEditFrom.value;
    }

    function completeTask(id) {
        tasks.value.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
        })
    }

    function deleteTask(id) {
        let newTasks = tasks.value.filter(task => task.id !== id);
        tasks.value = newTasks;
    }

    function showEditForm(id) {
        taskToEdit.value = tasks.value.find(task => task.id == id);
        displayEditFrom.value = true;
    }

    function changeTaskFilter(filter) {
        if (filter == "all" || filter == "pending" || filter == "completed") {
            taskFilter.value = filter;
        }
    }

    function updateSearchTerm(term) {
        searchTerm.value = term;
    }

    return {
        tasks,
        displayEditFrom,
        searchTerm,
        taskToEdit,
        taskFilter,
        getAllTasks,
        getTaskToEdit,
        getTaskFilter,
        getSearchTerm,
        addTask,
        editTask,
        closeEditModal,
        completeTask,
        deleteTask,
        showEditForm,
        changeTaskFilter,
        updateSearchTerm
    }
})