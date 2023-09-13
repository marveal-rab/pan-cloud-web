<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <Header></Header>
      <FileList :file-count="10"></FileList>
    </v-container>
  </v-main>
</template>

<script setup>
import FileList from "./FileList.vue";
import Header from "./Header.vue";
</script>
