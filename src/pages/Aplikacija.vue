<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="title">API</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="filteredItems"
          class="elevation-1 table"
          :loading="loading"
        >
          <template v-slot:top>
            <v-toolbar flat class="colorful-toolbar">
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-text-field
                v-model="search"
                label="Search"
                single-line
                hide-details
                class="colorful-input"
              ></v-text-field>
              <v-divider class="mx-4" inset vertical></v-divider>
            </v-toolbar>
          </template>
          <template v-slot:item.description="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on" class="opis">
                  {{ item.description }}
                </span>
              </template>
              <span>{{ item.description }}</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Application',
  data() {
    return {
      search: '',
      loading: false,
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' }
      ],
      items: []
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        return (
          item.name.toLowerCase().includes(this.search.toLowerCase()) ||
          item.description.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.items = response.data.map(post => ({
            id: post.id,
            name: post.title,
            description: post.body
          }));
          this.loading = false;
        })
        .catch(error => {
          console.error('Greška!', error);
          this.loading = false;
        });
      }
    }
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

.table {
  background-color: #a4d0f02a;
}

.colorful-toolbar {
  background-color: #0288d1;
  color: #ffffff;
}

.opis input {
  background-color: #bbdefb;
  color: #0d47a1;
}

.opis {
  color: #19468a;
  font-weight: bold;
}
</style>
