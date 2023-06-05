import { createRouter, createWebHistory } from 'vue-router'

import Test from '@/pages/test/Test.vue'
import Login from '@/pages/login/Login.vue'
import Home from '@/pages/home/Home.vue'
import LibraryIndex from '@/pages/library/LibraryIndex.vue'

const routes = [
    {
        path: '/login/',
        name: 'Login',
        component: Login
    },

    {
        path: '/test',
        name: 'Test',
        component: Test,
        meta: {
            requireAuth: true
        }
    },

    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'AppIndex',
                component: Test,
                meta: {
                    requireAuth: true
                }
            },

            {
                path: '/library',
                name: 'Library',
                component: LibraryIndex,
                meta: {
                    requireAuth: true
                }
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router