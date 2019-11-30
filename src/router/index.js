import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Subscriber from "@/components/Subscribers.vue"
import EventForm from "@/components/EventsForm.vue"
import store from '@/store'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoggedIn) {
        next("/about");
      } else {
        next();
      }

    },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      meta:{
        requiresAuth:true
      }
  },
  {
    path: "/subscribers",
    name: "subscribers",
    component: Subscriber,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: "/addevent",
    name: "addevent",
    component: EventForm,
    meta:{
      requiresAuth:true
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
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
