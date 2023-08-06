import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HomeComponent.vue';
import Projects from '@/components/ProjectComponent.vue';
import About from '@/components/AboutComponent.vue';
import Contact from '@/components/ContactComponent.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
