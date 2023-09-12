<template>
  <div class="mt-8">
    <v-row>
      <v-col v-for="(file, index) in files" :key="index" cols="auto">
        <FileItem :file-type="file.type" :file-name="file.name"></FileItem>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import FileItem from "./FileItem.vue";

const files = [
  { name: "文件1.txt", type: "image" },
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
