<template>
  <div align="center">
    <v-card
      class="px-2 no-border-file-card"
      width="128px"
      @mouseover="handleFileItemMouseover"
      @mouseleave="handleFileItemMouseleave"
    >
      <v-card class="no-border-file-card" height="36px">
        <v-row align="center" v-show="showToolBarRef || itemSelected">
          <v-col cols="4">
            <v-checkbox-btn
              color="info"
              class="item-checkbox ml-3"
              :ripple="false"
              density="compact"
              @click="handleFileItemClick"
            ></v-checkbox-btn>
          </v-col>
          <v-col cols="8">
            <v-btn-group>
              <v-btn icon size="x-small" :ripple="false">
                <v-icon>mdi-share-variant-outline</v-icon>
              </v-btn>
              <v-btn icon size="x-small" :ripple="false">
                <v-icon>mdi-tray-arrow-down</v-icon>
              </v-btn>
              <v-btn icon size="x-small" :ripple="false">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </v-btn-group>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="no-border-file-card" width="100px" height="100px">
        <v-img
          v-if="props.fileType === 'image'"
          :src="`https://picsum.photos/128/128`"
          :lazy-src="`https://picsum.photos/10/6`"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2 w-100 h-100"
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
        <FolderIcon class="w-100 h-100" v-if="props.fileType === 'folder'" />
      </v-card>
      <v-card class="no-border-file-card mt-2">
        {{ fileName }}
      </v-card>
    </v-card>
  </div>
</template>

<script setup>
import FolderIcon from "./icons/IconFolder.vue";
import { ref } from "vue";

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

const itemSelected = ref(false);
const showToolBarRef = ref(false);

function handleFileItemMouseover() {
  showToolBarRef.value = true;
}

function handleFileItemMouseleave() {
  showToolBarRef.value = false;
}

function handleFileItemClick() {
  itemSelected.value = !itemSelected.value;
}
</script>

<style scoped>
.no-border-file-card {
  border: none; /* 去掉外边框 */
  box-shadow: none; /* 去掉阴影 */
}
.v-col {
  padding: 0 !important;
}

.item-checkbox {
  font-size: 10px;
}

.v-btn--size-x-small {
  --v-btn-height: 8px;
}
</style>
