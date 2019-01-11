import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home";
import PermitDetails from "./pages/PermitDetails";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/permit/:id",
      name: "permit",
      component: PermitDetails
    }
  ]
});
