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
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})