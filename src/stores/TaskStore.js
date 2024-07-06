import { defineStore } from 'pinia'
import { ref, computed } from "vue";

export const useTaskStore = defineStore('myTasks', () => {
    // state properties
    const tasks = ref([]);
    const displayEditForm = ref(false);
    const taskToEdit = ref({});
    const taskFilter = ref("all");
    const searchTerm = ref("");

    // getters
    const getAllTasks = computed(() => tasks.value);

    const getCompletedTasks = computed(() => tasks.value.filter(task => task.completed == true));

    const getPendingTasks = computed(() => tasks.value.filter(task => task.completed != true));

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

    function editTaskName(id, name) {
        tasks.value.map(task => {
            if (task.id == id) {
                task.name = name;
            }
        })
    }

    function editTaskCompleted(id) {
        tasks.value.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
        })
    }

    const deleteTask = (id) => {
        let newTaskList = tasks.value.filter(task => task.id != id);
        tasks.value = newTaskList;
    }

    function updateTaskToEdit(id) {
        taskToEdit.value = tasks.value.find(task => task.id == id);
    }

    function closeEditModal() {
        displayEditForm.value = false;
    }

    function showEditModal(id) {
        displayEditForm.value = true;
    }

    function updateTaskFilter(filter) {
        if (filter == "all" || filter == "pending" || filter == "completed") {
            taskFilter.value = filter;
        }
    }

    function updateSearchTerm(term) {
        searchTerm.value = term;
    }

    function updateTasks(tasks) {
        tasks.value = tasks;
    }

    return {
        tasks,
        displayEditForm,
        taskToEdit,
        taskFilter,
        searchTerm,
        getAllTasks,
        getCompletedTasks,
        getPendingTasks,
        addTask,
        editTaskName,
        editTaskCompleted,
        deleteTask,
        updateTaskToEdit,
        closeEditModal,
        showEditModal,
        updateTaskFilter,
        updateSearchTerm,
        updateTasks
    }
})