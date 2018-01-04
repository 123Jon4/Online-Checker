import Vue from 'vue';
import Router from 'vue-router';
import ConnectionStateDisplay from '../components/ConnectionStateDisplay';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ConnectionStateDisplay',
      component: ConnectionStateDisplay,
    },
  ],
});
