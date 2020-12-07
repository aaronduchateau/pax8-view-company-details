import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import EditCompany from './views/EditCompany.vue';
import ViewCompany from './views/ViewCompany.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/edit-company/:id',
      name: 'edit',
      component: EditCompany,
    },
    {
      path: '/view-company/:id',
      name: 'view',
      component: ViewCompany,
    },
  ],
});
