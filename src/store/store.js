import { reactive } from "vue";

function loadTaskStore() {
  const savedData = localStorage.getItem("taskStore");
  if (savedData) {
    return JSON.parse(savedData);
  }
  return [];
}

function saveTaskStore() {
  localStorage.setItem("taskStore", JSON.stringify(taskStore.tasks));
}

export const taskStore = reactive({
  tasks: loadTaskStore (),
  
  createTask(task) {
    this.tasks.push(task);
    saveTaskStore();
  },

  deleteTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    console.log(taskIndex)
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
    saveTaskStore();
  },

  editTask(updatedTask) {
    const taskIndex = taskStore.tasks.findIndex((task) => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      taskStore.tasks.splice(taskIndex, 1, updatedTask);
    } else {
      taskStore.tasks.splice(taskIndex + 1, 1, updatedTask);
    }
    saveTaskStore();
  },

  toggleTask(checkedTask) {
    const taskIndex = this.tasks.findIndex((task) => task.id === checkedTask.id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
      saveTaskStore();
    }
  }
});
