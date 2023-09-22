<script setup>
import LogoFullIcon from "./icons/IconLogoFull.vue";

const menuItems = [
  {
    text: "全部文件",
    icon: "mdi-folder",
    to: "/files",
    subMenu: [
      {
        text: "图片",
        icon: "mdi-image-multiple",
        to: "image",
      },
      { text: "文档", icon: "mdi-file-multiple", to: "document" },
      { text: "视频", icon: "mdi-video", to: "video" },
      { text: "音频", icon: "mdi-music", to: "audio" },
      { text: "其他", icon: "mdi-dots-horizontal", to: "other" },
    ],
  },
  {
    text: "回收站",
    icon: "mdi-trash-can",
    to: "/trash",
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

    <v-list nav>
      <v-list-item v-for="(item, index) in menuItems" :key="index">
        <v-list-group
          :value="item.text"
          v-if="item.subMenu.length != 0"
          color="info"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="item.text"
              :prepend-icon="item.icon"
              :to="item.to"
              link
            />
          </template>
          <v-list-item
            v-for="(subItem, subIndex) in item.subMenu"
            :key="subIndex"
            :prepend-icon="subItem.icon"
            :title="subItem.text"
            :value="subItem.text"
            :to="{ name: 'files', params: { ft: subItem.to } }"
            color="info"
            link
          />
        </v-list-group>
        <v-list-item
          v-else
          :title="item.text"
          :prepend-icon="item.icon"
          :value="item.text"
          color="info"
          :to="item.to"
          link
        />
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
