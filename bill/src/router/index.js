import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/bill',
    name: 'bill',
    component: () => import('../views/bill.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/project.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
