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
                    aside: () => import('../components/Dashboard/DashboardAside/DashboardAside.vue'),
                },
            },
            {
                path: 'forms/:id',
                name: 'form-settings',
                redirect: route => ({
                    name: 'fields',
                    params: { id: route.params.id }
                }),
                components: {
                    default: () => import('../views/Dashboard/FormsList/FormItem/index.vue'),
                    aside: () => import('../components/Dashboard/DashboardAside/DashboardAside.vue'),
                },
                children: [
                    {
                        path: 'forms-type',
                        name: 'forms-type',
                        component: () =>  import('../views/Dashboard/FormsList/FormItem/FormsType/index.vue')
                    },
                    {
                        path: 'entities',
                        name: 'entities',
                        component: () =>  import('../views/Dashboard/FormsList/FormItem/Entities/index.vue')
                    },
                    {
                        path: 'fields',
                        name: 'fields',
                        component: () =>  import('../views/Dashboard/FormsList/FormItem/Fields/index.vue')
                    },
                    {
                        path: 'fields-rules',
                        name: 'fields-rules',
                        component: () =>  import('../views/Dashboard/FormsList/FormItem/FieldsRules/index.vue')
                    },
                    {
                        path: 'other-settings',
                        name: 'other-settings',
                        component: () =>  import('../views/Dashboard/FormsList/FormItem/OtherSettings/index.vue')
                    }
                ]
            },
            {
                path: 'users',
                name: 'users',
                components: {
                    default: () => import('../views/Dashboard/Users/index.vue'),
                    aside: () => import('../components/Dashboard/DashboardAside/DashboardAside.vue'),
                }
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
