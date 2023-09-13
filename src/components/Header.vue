<script setup>
import { ref } from "vue";
const items = [
  {
    title: "Dashboard",
    disabled: false,
    href: "breadcrumbs_dashboard",
  },
  {
    title: "Link 1",
    disabled: false,
    href: "breadcrumbs_link_1",
  },
  {
    title: "Link 2",
    disabled: true,
    href: "breadcrumbs_link_2",
  },
];
const selected_items = [];

// refs
const newFolderName = ref("");
const newFolderDialog = ref(false);

function handleNewFolderBtnClick() {
  newFolderDialog.value = true;
}

function handleNewFolderSubmitClick() {
  newFolderDialog.value = false;
}

function handleNewFolderCancelClick() {
  newFolderDialog.value = false;
}
</script>

<script>
import { ref, onMounted } from "vue";

const fileInputRef = ref(null);

function handleUploadBtnClick() {
  // 通过引用(ref)触发文件输入框的点击事件
  fileInputRef.value.click();
}

function handleFilesSelected(event) {
  const selectedFiles = event.target.files;
  console.log("已选择文件:", selectedFiles.length);
}

onMounted(() => {
  fileInputRef = this.$refs.fileInputRef;
});
</script>

<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>

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
    <v-divider></v-divider>
  </div>

  <v-dialog v-model="newFolderDialog" persistent width="auto">
    <v-card>
      <v-card-title> 新建文件夹名称 </v-card-title>
      <v-text-field></v-text-field>
      <v-card-actions>
        <v-btn @click="handleNewFolderCancelClick"> 取消 </v-btn>
        <v-btn @click="handleNewFolderSubmitClick"> 确认 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-file-input
    multiple
    ref="fileInputRef"
    style="display: none"
    @change="handleFilesSelected"
  ></v-file-input>
</template>

<style scoped></style>
