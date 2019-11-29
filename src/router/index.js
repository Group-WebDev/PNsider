import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../components/Landing.vue";
import UserList1 from '@/components/UserList(2021).vue'
import UserList2 from '@/components/UserList(2022).vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "home",
    component: Landing
  },
  {
    path: "/userlist1",
    name: "user",
    component: UserList1
  } ,
  {
    path: "/userlist2",
    name: "users",
    component: UserList2
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
