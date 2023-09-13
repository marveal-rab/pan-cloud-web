<script setup>
import LogoFullIcon from "./icons/IconLogoFull.vue";

const links = [
  { icon: "mdi-folder", text: "全部文件" },
  { icon: "mdi-trash-can-outline", text: "回收站" },
];
const menuItems = [
  {
    text: "全部文件",
    icon: "mdi-folder",
    subMenu: [
      { text: "图片", icon: "mdi-image-multiple" },
      { text: "文档", icon: "mdi-file-multiple" },
      { text: "视频", icon: "mdi-video" },
      { text: "音频", icon: "mdi-music" },
      { text: "其他", icon: "mdi-dots-horizontal" },
    ],
  },
  {
    text: "回收站",
    icon: "mdi-trash-can",
    subMenu: [],
  },
];
</script>

<template>
  <v-navigation-drawer permanent>
    <v-sheet color="grey-lighten-4" class="px-1 py-2" align="center">
      <logo-full-icon height="36px" width="100%" />
    </v-sheet>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="(item, index) in menuItems" :key="index">
        <v-list-item
          :prepend-icon="item.icon"
          :title="item.text"
          :value="item.text"
        ></v-list-item>
        <v-list dense>
          <v-list-item
            v-for="(subItem, subIndex) in item.subMenu"
            :key="subIndex"
          >
            <v-list-item
              :prepend-icon="subItem.icon"
              :title="subItem.text"
              :value="subItem.text"
            ></v-list-item>
          </v-list-item>
        </v-list>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
