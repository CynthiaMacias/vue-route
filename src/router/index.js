import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/services",
    name: "services",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Services.vue")
  },
  {
    path: "/fotos/:id",
    name: "fotos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Fotos.vue")
  },
  {
    path: "/grid",
    name: "grid",
    component: () => import(/* webpackChunkName: "about" */ "../views/Grid.vue")
  },
  {
    path: "/card",
    name: "card",
    component: () => import(/* webpackChunkName: "about" */ "../views/Card.vue")
  },
  {
    path: "/forms",
    name: "forms",
    component: () => import(/* webpackChunkName: "about" */ "../views/Forms.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
