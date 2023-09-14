<template>
  <v-app id="inspire">
    <Nav></Nav>
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <Header></Header>
        <FileList :file-count="10"></FileList>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Nav from "@cp/Nav.vue";
import FileList from "./FileList.vue";
import Header from "./Header.vue";
</script>
