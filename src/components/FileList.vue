<template>
  <div class="my-4 mx-2">
    <v-row>
      <v-col
        v-for="(file, index) in state.files"
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

<script></script>

<script setup>
import { onMounted, defineProps, reactive } from "vue";
import API from "@/api/apis";
import FileItem from "./FileItem.vue";

const state = reactive({ files: [] });

const props = defineProps({
  params: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  fetchFiles();
});

function fetchFiles() {
  const params = {
    count: props.params.fileCount,
    type: props.params.fileType === "files" ?? null,
  };
  // TODO 请求文件列表
  // state.files = API.fetchFiles(params)
  state.files = [
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
}
</script>
