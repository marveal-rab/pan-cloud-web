<template>
  <div width="100px" height="100px" class="mx-2">
    <v-card v-if="props.fileType === 'image'" class="no-border-file-card">
      <v-img
        :src="`https://picsum.photos/128/128`"
        :lazy-src="`https://picsum.photos/10/6`"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
        width="100px"
        height="100px"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>
    <v-card
      v-if="props.fileType === 'folder'"
      border="false"
      class="no-border-file-card"
    >
      <FolderIcon width="100px" height="100px" />
    </v-card>
  </div>
  <div align="center" class="mt-2">{{ fileName }}</div>
</template>

<script setup>
import FolderIcon from "./icons/IconFolder.vue";

const props = defineProps({
  fileType: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.no-border-file-card {
  border: none; /* 去掉外边框 */
  box-shadow: none; /* 去掉阴影 */
}
</style>
