<script setup>
import { computed, reactive, watchEffect, defineProps, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
  dir: {
    type: Array,
    required: true,
    default: [],
  },
});

const state = reactive({ paths: [], ft: "" });

watchEffect(() => {
  console.log(route.params.ft);
  state.ft = route.params.ft;
});

onMounted(() => {
  console.log(state.paths);
  state.paths.push({
    title: "全部文件",
    href: state.ft,
  });
  console.log(state.paths);
  state.paths = props.dir.map((item) => {
    return {
      title: item.title,
      href: item.url,
    };
  });
});
</script>

<template>
  <div>
    <v-breadcrumbs :items="state.paths">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<style scoped></style>
