import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/chat',
        component: () => import('@/views/ChatView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/NotFoundView.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
