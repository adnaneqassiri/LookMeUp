import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import("../views/Home.vue"),
  },
  {
    path: "/getstarted",
    name: "getstarted",
    component: () =>
      import("../views/getstrated.vue"),
  },
  {
    path: "/payment",
    name: "payment",
    component: () =>
      import("../views/payment.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    component: () =>
      import("../views/faq.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import("../views/contact.vue"),
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () =>
      import("../views/pricing.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
