import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/index.vue';

const routes: { path: string; name: string; component: any }[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/forms-list',
    name: 'forms-list',
    component: () => import('../views/FormsList/index.vue')
  },
  {
    path: '/refactor-forms',
    name: 'refactor-forms',
    component: () => import('../views/RefactorForms/index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
