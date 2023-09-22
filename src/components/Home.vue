<template>
  <v-app id="inspire">
    <Nav></Nav>
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <FilePath :dir="state.params.dir"></FilePath>
        <ToolBar></ToolBar>
        <v-divider></v-divider>
        <FileList :params="state.params"></FileList>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useRoute } from "vue-router";
import { reactive, watchEffect } from "vue";
import Nav from "@cp/Nav.vue";
import FileList from "@cp/FileList.vue";
import FilePath from "@cp/FilePath.vue";
import ToolBar from "@cp/ToolBar.vue";

const route = useRoute();

const state = reactive({
  params: {
    fileCount: 10,
    fileType: "all",
    dir: [],
  },
  filePath: [],
});

const emptySinglePath = {
  title: "",
  disabled: false,
  href: "",
};

watchEffect(() => {
  state.params.fileType = route.params.ft;
});
</script>
