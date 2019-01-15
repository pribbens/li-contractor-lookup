import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home";
import PermitDetails from "./pages/PermitDetails";

Vue.use(Router);

export default new Router({
  mode: "history",
  // The base of gh-pages is not '/', but '/li-contractor-lookup/, without this gh-pages doesn't load
  base: process.env.NODE_ENV === "production" ? "/li-contractor-lookup/" : "/",
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
