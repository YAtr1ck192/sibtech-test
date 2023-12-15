import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/index.vue';

const routes: { path: string; name: string; component: any }[] = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/forms',
        component: () => import('../views/Dashboard/index.vue'),
        children: [
            {
                path: 'forms',
                name: 'forms',
                components: {
                    default: () => import('../views/Dashboard/FormsList/index.vue'),
                    aside: () => import('../components/Dashboard/DashboardAside/index.vue'),
                }
            },
            {
                path: 'users',
                name: 'users',
                components: {
                    default: () => import('../views/Dashboard/Users/index.vue'),
                    aside: () => import('../components/Dashboard/DashboardAside/index.vue'),
                }
            }
        ]
    }
    ,
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
