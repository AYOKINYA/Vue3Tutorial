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
        component: () => import('@/components/counter/Count')
    },
    {
        path: '/charts',
        name: 'Charts',
        component: () => import('@/components/charts/Charts')
    },
    {
        path: '/realtime_charts',
        name: 'RealTimeSeries',
        component: () => import('@/components/charts/RealTimeSeries')
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})