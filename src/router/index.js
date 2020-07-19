import Vue from 'vue'
import VueRouter from 'vue-router'
import TotalConfirmed from "../views/TotalConfirmed";
import NewConfirmed from "../views/NewConfirmed";
import TotalDeath from "../views/TotalDeath";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'TotalConfirmed',
    component: TotalConfirmed
  },
  {
    path: '/NewConfirmed',
    name: 'NewConfirmed',
    component: NewConfirmed
  },
  {
    path: '/TotalDeath',
    name: 'TotalDeath',
    component: TotalDeath
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
