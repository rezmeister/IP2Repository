import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Aplikacija from '../pages/Aplikacija.vue';
import contact from '../pages/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'O nama',
    component: About,
  },

  {
    path: '/Aplikacija',
    name: 'Aplikacija',
    component: Aplikacija,
  },


  {
    path: '/contact',
    name: 'Kontakt',
    component: contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
