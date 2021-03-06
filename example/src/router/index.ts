import Vue from 'vue';
import VueRouter, { RouteConfig, Route, NavigationGuardNext } from 'vue-router';
import store from '../store';
import Login from '../views/Login.vue';
import Splash from '../views/Splash.vue';
import Home from '../views/Home.vue';
Vue.use(VueRouter);

/**undocumented bug in vuex-persist with localforage. Hacky fix from issues forum */
async function reHydrateStorage(to: Route, from: Route, next: any) {
  // undocumented bug in vuex-persist with localforage. Hacky fix from issues forum
  // restored is a promise, when fulfilled means state is restored

  // await console.log('rehydrating storage');
  // await console.log(store.state.authMod);
  await (store as any).original.restored;
  next();
}

function checkAuthValid() {
  // if (!store.state.authMod.privateKey)
}

/**More strict check */
function beforeEachRoute(to: Route, from: Route, next: any) {
  // reHydrateStorage(to, from, next).then(() => {
  //   store.dispatch.authMod.checkAuth().then((verified: boolean | undefined) => {
  //     console.log('checking auth');
  //     console.log('verified', verified);
  //     if (verified) {
  //       if (to.path.includes('/login')) next('/home');
  //       else next();
  //       return null;
  //     } else {
  //       next('/login/?checkauth=no');
  //       return null;
  //     }
  //   });
  // });
  next();
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login',
    component: Splash,
  },
  {
    path: '/splash',
    name: 'Splash',
    component: Splash,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});
router.beforeEach(beforeEachRoute);
export default router;
