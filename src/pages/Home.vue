<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="title">IP2 Aplikacija</h1>
      </v-col>
      <v-col cols="12">
        <p>
          Ova aplikacija je razvijena koristeći Vue.js i Vuetify za frontend. Sadrži nekoliko stranica:
        </p>
        <v-list dense>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Homepage</v-list-item-title>
              <v-list-item-subtitle>
                Kratki pregled aplikacije i njenog razvoja.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Info</v-list-item-title>
              <v-list-item-subtitle>
                Informacije o kreatoru projekta.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Aplikacija</v-list-item-title>
              <v-list-item-subtitle>
                Prikazuje podatke povučene s javnog API-a i omogućava pretragu i filtriranje.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Kontakt</v-list-item-title>
              <v-list-item-subtitle>
                Telefonski broj i mail studenta.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider class="my-4"></v-divider>
        <h2 class="subtitle">Dodatne informacije</h2>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="mx-auto my-4" max-width="400" color="deep-purple lighten-3" dark>
              <v-card-title class="headline white--text"> Korištene tehnologije</v-card-title>
              <v-card-text>
                <ul>
                  <li>Vue.js</li>
                  <li>Vuetify</li>
                  <li>Axios</li>
                  <li>JavaScript</li>
                  <li>HTML & CSS</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="mx-auto my-4" max-width="400" color="indigo lighten-3" dark>
              <v-card-title class="headline white--text">Funkcionalnosti</v-card-title>
              <v-card-text>
                <ul>
                  <li>Prikaz podataka s javnog API-a</li>
                  <li>Pretraga i filtriranje podataka</li>
                  <li>Prikaz informacija o studentu</li>
                  <li>Responzivni dizajn</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Homepage'
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.title {
  color: #ffffff;
  font-weight: bold;
  font-size: 2.5rem;
}

.subtitle {
  color: #ffffff;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
}
.v-card {
  padding: 16px;
}


.v-card-title {
  padding: 0;
  text-align: center;
  margin-bottom: 5px;
  text-decoration: underline;
}

</style>
