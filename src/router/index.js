import Vue from 'vue';
import Router from 'vue-router';
import Cards from '@/pages/Cards.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Cards
  }
];


export default new Router({
  //mode: 'history',
  routes
})

export {routes}