<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
.v-app-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.v-main {
  margin-top: 64px;
  padding: 16px;
  background: linear-gradient(45deg, #3990c6 30%, #85c7dd 90%);
}

.v-app-bar {
  background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
}

.v-footer {
  background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
}

</style>