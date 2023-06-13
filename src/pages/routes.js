import { createRouter, createWebHistory } from 'vue-router'

import Test from '@/pages/test/Test.vue'
import Login from '@/pages/login/Login.vue'
import Home from '@/pages/home/Home.vue'
import TodoIndex from '@/pages/todo/TodoIndex.vue'
import FinishIndex from '@/pages/finish/FinishIndex.vue'
import About from '@/pages/about/About.vue'

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
                component: TodoIndex,
                meta: {
                    requireAuth: true
                }
            },

            {
                path: '/todo',
                name: 'Todo Page',
                component: TodoIndex,
                meta: {
                    requireAuth: true
                }
            },


            {
                path: '/finish',
                name: 'Finish Page',
                component: FinishIndex,
                meta: {
                    requireAuth: true
                }
            },

            {
                path: '/about',
                name: 'About Page',
                component: About,
                meta: {
                    requireAuth: true
                }
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router