import Vue from "vue";
// import store from "@/store/index.js"
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Analytics from '@/components/dashviews/Analytics'
import UserList from '@/components/dashviews/UserList'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes:
  [
    {
      path: "/login",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "about",
      component: () =>
        import("../views/About.vue"),
  
        meta: {
          requiresAuth: true
        }
    },
    {
      path: "/analytics",
      name: "analytics",
      component: Analytics
    },
    {
      path: "/userList",
      name: "userlist",
      component: UserList
    },
  ]
}) 

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next()
//       return
//     }
//     next('/login')
//   } else {
//     next()
//   }
// })


export default router;
