import Vue from 'vue'
import VueRouter from 'vue-router'
import TrafficLight from '../components/TrafficLight'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Traffic Light',
    component: TrafficLight
  },
  {
    name: "Light",
    path: '/:id',
    component: TrafficLight,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
