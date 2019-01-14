import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home";
import PermitDetails from "./pages/PermitDetails";

Vue.use(Router);

export default new Router({
  mode: "history",
<<<<<<< HEAD
  base: "/",
=======
  base: process.env.NODE_ENV === "production" ? "/li-contractor-lookup/" : "/",
>>>>>>> ff88aa20eed236707e857c375166051b5763519b
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
