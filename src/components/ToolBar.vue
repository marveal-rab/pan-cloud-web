<script setup>
import { reactive } from "vue";

const selected_items = [];

const state = reactive({
  newFolderName: "",
  newFolderDialog: false,
});

function handleNewFolderBtnClick() {
  state.newFolderDialog = true;
}

function handleNewFolderSubmitClick() {
  // TODO 执行新建文件夹
  state.newFolderDialog = false;
  state.newFolderName = "";
}

function handleNewFolderCancelClick() {
  state.newFolderDialog = false;
  state.newFolderName = "";
}

function handleFilesSelected(event) {
  const selectedFiles = event.target.files;
  console.log("已选择文件:", selectedFiles.length);
}
</script>

<script>
export default {
  methods: {
    handleUploadBtnClick() {
      // 通过引用(ref)触发文件输入框的点击事件
      this.$refs.fileInputRef.click();
    },
  },
};
</script>

<template>
  <div>
    <v-row class="my-2 ml-2">
      <v-btn-group v-if="selected_items.length === 0">
        <v-btn prepend-icon="mdi-upload" @click="handleUploadBtnClick">
          上传
        </v-btn>
        <v-btn prepend-icon="mdi-folder-plus" @click="handleNewFolderBtnClick">
          新建文件夹
        </v-btn>
      </v-btn-group>
      <v-btn-group v-if="selected_items.length !== 0">
        <v-btn prepend-icon="mdi-share">分享</v-btn>
        <v-btn prepend-icon="mdi-download">下载</v-btn>
        <v-btn prepend-icon="mdi-close">删除</v-btn>
        <v-btn prepend-icon="mdi-rename-box">重命名</v-btn>
      </v-btn-group>
    </v-row>
  </div>

  <v-dialog v-model="state.newFolderDialog" persistent width="auto">
    <v-card>
      <v-card-title> 新建文件夹名称 </v-card-title>
      <v-text-field :ref="state.newFolderName"></v-text-field>
      <v-card-actions>
        <v-btn @click="handleNewFolderCancelClick"> 取消 </v-btn>
        <v-btn @click="handleNewFolderSubmitClick"> 确认 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-file-input
    multiple
    class="d-none"
    ref="fileInputRef"
    @change="handleFilesSelected"
  ></v-file-input>
</template>

<style scoped></style>
