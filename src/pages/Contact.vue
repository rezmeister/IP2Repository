<template>
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <h1>Kontakt</h1>
        </v-col>
        <v-col cols="12">
          <v-card class="mx-auto" max-width="400">
            <v-card-title>Kontakt informacije</v-card-title>
            <v-card-text>
              <p><strong>Mail:</strong> rezic.mateo@gmail.com</p>
              <p><strong>Broj:</strong> +387 63 544 888</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Contact'
  };
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>
  