<template>
  <div class="flex justify-center items-center mt-20">
    <div class="p-4 w-1/2">
      <h2 class="text-3xl font-bold text-pink-400 mb-4 flex items-center">
        Edit Tugas
      </h2>
      <div class="space-y-4">
        <div class="flex flex-col">
          <label class="text-gray-700 font-semibold mb-3">Tugas</label>
          <input
            v-model="inputNewTask"
            class="border rounded-md px-4 py-2 border-pink-300 focus:outline-none focus:border-pink-500"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-gray-700 font-semibold mb-3">Kategori</label>
          <input
            v-model="inputKategoriBaru"
            class="border rounded-md px-4 py-2 border-pink-300 focus:outline-none focus:border-pink-500"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-gray-700 font-semibold mb-3">Deadline</label>
          <input
            v-model="inputDeadlineBaru"
            class="border rounded-md px-4 py-2 border-pink-300 focus:outline-none focus:border-pink-500"
          />
        </div>
      </div>
      <button
        @click="updateTask(this.id)"
        class="px-6 py-3 mt-6 bg-pink-600 text-white font-bold text-md rounded-lg hover:bg-pink-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
      >
        Edit
      </button>
    </div>
  </div>
</template>


<script>
import { taskStore } from "../store/store.js";
export default {
  data() {
    return {
      taskStore,
      id: this.$route.params.id,
      inputNewTask: "",
      inputKategoriBaru:"",
      inputDeadlineBaru: "",
    };
  },
  methods: {
    getTaskById() {
      const task = this.taskStore.tasks.find((task) => task.id === parseInt(this.id) || task.id === this.id);
      if (task) {
        this.inputNewTask = task.task;
        this.inputKategoriBaru = task.kategori;
        this.inputDeadlineBaru = task.deadline;
      }
    },
    updateTask(index){
        const updatedTask = {
            id: index,
            task: this.inputNewTask,
            kategori: this.inputKategoriBaru,
            deadline: this.inputDeadlineBaru,
        };
        taskStore.editTask(updatedTask)
        this.$router.push('/TodoList');
    }
  },
  mounted() {
    this.getTaskById();
  },
};
</script>

