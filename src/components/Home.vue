<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <h1>Home</h1>
      <v-divider></v-divider>
      <FileList :file-count="10"></FileList>
    </v-container>
  </v-main>
</template>

<script setup>
import FileList from "./FileList.vue";
</script>
