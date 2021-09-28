import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/components/Home')
    },
    {
        path: '/count',
        name: 'Count',
        component: () => import('@/components/Count')
    },
    {
        path: '/charts',
        name: 'Charts',
        component: () => import('@/components/Charts')
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})