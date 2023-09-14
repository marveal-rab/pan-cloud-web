<template>
  <div class="my-4 mx-2">
    <v-row>
      <v-col
        v-for="(file, index) in files"
        :key="index"
        cols="auto"
        class="pa-0 mt-0"
      >
        <FileItem
          class="mx-2 mt-8"
          :file-type="file.type"
          :file-name="file.name"
        ></FileItem>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import FileItem from "./FileItem.vue";

const files = [
  { name: "文件1.txt", type: "folder" },
  { name: "文件2.jpg", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
  { name: "文件3.pdf", type: "image" },
];
</script>
