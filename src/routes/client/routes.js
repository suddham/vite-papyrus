import Home from '@/views/Home.vue';

export const routes = [
    { path: '/', component: Home, meta: { title: 'Home' } },
    {
        path: '/login',
        meta: { title: 'Login' },
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/:path(.*)',
        meta: { title: 'Error' },
        component: () => import('@/views/NotFound.vue')
    }
];
