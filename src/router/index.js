import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import place from '../views/place.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/place',
        name: 'place',
        component: place
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
