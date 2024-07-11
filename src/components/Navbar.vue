<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>IP2</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-for="item in items" :key="item.title" @click="navigate(item.route)" text>
      {{ item.title }}
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';

const items = [
  { title: 'Home', route: '/' },
  { title: 'Info', route: '/about' },
  { title: 'Aplikacija', route: '/Aplikacija' },
  { title: 'Kontakt', route: '/contact' }
];

const router = useRouter();

const navigate = (route) => {
  router.push(route);
};
</script>
