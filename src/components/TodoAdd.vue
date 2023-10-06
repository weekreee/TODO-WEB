<script>
import { taskStore } from "../store/store.js";

export default {
  emits: ["close-modal"],
  data() {
    return {
      taskStore,
      inputTask: "",
      inputKategori:"",
      inputDeadline: "",
    };
  },
  methods: {
    addTask() {
      if (
        this.inputTask === "" ||
        this.inputKategori === "" ||
        this.inputDeadline === ""
      )
        return;
      const newTask = {
        id: Date.now().toString(),
        task: this.inputTask,
        kategori:this.inputKategori,
        deadline: this.inputDeadline,
      };
      taskStore.createTask(newTask);
      this.inputTask = "";
      this.inputKategori = "";
      this.inputDeadline = "";
      this.$emit("close-modal");
    },
  },
};
</script>

<template>
  <span class="text-black font-bold text-2xl">Tambahkan Tugas Baru</span>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-1">
      <label class="text-black font-bold">To Do</label>
      <input
        v-model="inputTask"
        class="border-2 py-1 border-gray-400 rounded-lg text-center"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-black font-bold">Kategori</label>
      <input
        v-model="inputKategori"
        class="border-2 py-1 border-gray-400 rounded-lg text-center"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-black font-bold">Deadline</label>
      <input
        v-model="inputDeadline"
        class="border-2 py-1 border-gray-400 rounded-lg text-center"
      />
    </div>
  </div>
  <button
    @click="addTask"
    class="px-4 py-2 mt-1 bg-rose-400 w-fit h-fit text-gray-100 font-bold text-sm rounded-xl hover:scale-110 transition-all hover:ease-in-out hover:duration-300"
  >
    Buat
  </button>
</template>
