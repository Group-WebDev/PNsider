import Vue from "vue";
import store from "@/store/index.js"
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes:
  [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Dashboard",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
  
        meta: {
          requiresAuth: true
        }
    }
  ]
}) 

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})


export default router;
