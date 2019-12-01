import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/log',
      name: 'log',
      component: () => import('./components/LogList.vue')
    },
    {
      path: '/alters',
      name: 'alters',
      component: () => import('./views/Alters.vue')
    },
    {
      path: '/alters/new',
      name: 'alter-new',
      component: () => import('./views/AlterNew.vue')
    },
    {
      path: '/alters/:id',
      name: 'alter',
      component: () => import('./views/Alter.vue')
    },
  ],
});
