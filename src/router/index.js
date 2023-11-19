import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JoinView from "../views/JoinView.vue";
import MainView from "../views/MainView.vue";
import FindInfo from "../views/FindInfo.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
      path: "/join",
      name: "Join",
      component: JoinView
  },
  {
    path: "/main",
    name: "Main",
    component: MainView
  },
  {
    path: "/findInfo",
    name: "FindInfo",
    component: FindInfo
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
