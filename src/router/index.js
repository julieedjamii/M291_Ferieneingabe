import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reservations',
    name: 'reservations',
    component: () => import( '@/views/ReservationsView')
  },
  
  {
    path: '/Ferienreservation',
    name: 'Ferienreservation',
    component: () => import( '@/views/FerienReservationView')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
