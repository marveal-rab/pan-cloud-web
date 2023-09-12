<template>
  <v-card style="width: 100px; height: 100px" class="mx-2" variant="none">
    <v-img
      v-if="props.fileType === 'image'"
      :src="`https://picsum.photos/128/128`"
      :lazy-src="`https://picsum.photos/10/6`"
      aspect-ratio="1"
      cover
      class="bg-grey-lighten-2"
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
  <div align="center" class="mt-2">{{ fileName }}</div>
</template>

<script setup>
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
