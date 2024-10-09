import { createRouter, createWebHistory } from 'vue-router';

// Import other components when they're ready, for now, you can create placeholders

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/main-page.vue'), // Home component (e.g., App.vue)
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('./views/Music.vue'), // Lazy-loaded route
  },
  {
    path: '/anewlow',
    name: 'A New Low',
    component: () => import('./views/ANewLow.vue'), // Lazy-loaded route
  },
  {
    path: '/bookus',
    name: 'Book Us',
    component: () => import('./views/BookUs.vue'), // Lazy-loaded route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
