import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../vue-material-reservierung-julieedjamii/src/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reservations',
    name: 'reservations',
    component: () => import( '../../vue-material-reservierung-julieedjamii/src/views/ReservationsView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../../vue-material-reservierung-julieedjamii/src/views/AboutView.vue')
  },
  {
    path: '/Ferienreservation',
    name: 'Ferienreservation',
    component: () => import( '../../vue-material-reservierung-julieedjamii/src/views/FerienReservationView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
