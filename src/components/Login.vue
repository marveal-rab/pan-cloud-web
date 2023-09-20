<template>
  <div class="d-flex align-center justify-center login-page">
    <v-sheet class="mx-auto w-100">
      <CloudRepoIcon class="mx-auto w-100" height="512px" />
    </v-sheet>

    <v-sheet class="mx-auto w-100">
      <LogoIcon class="mx-auto my-6 w-100" height="128px"></LogoIcon>
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">账号</div>

        <v-text-field
          density="compact"
          prepend-inner-icon="mdi-account"
          variant="outlined"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          密码
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          @click="handleLoginBtnClick"
        >
          登录
        </v-btn>
      </v-card>
    </v-sheet>
  </div>
  <router-view />
</template>

<script setup>
import LogoIcon from "./icons/IconLogo.vue";
import CloudRepoIcon from "./icons/IconCloudRepo.vue";
import { ref } from "vue";
import { test } from "@/api/apis";

const visible = ref(false);

async function handleLoginBtnClick() {
  await test();
}
</script>

<style scoped>
.login-page {
  height: 100vh;
  background-color: #f5f5f5;
}

.login-page .v-sheet {
  background-color: #f5f5f5;
}
</style>
