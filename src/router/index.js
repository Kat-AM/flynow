import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/auth/SignIn.vue';
import SignUp from '@/auth/SignUp.vue';
import ForgotPassword from '@/auth/ForgotPassword.vue'; 
import Menu from '@/pages/Menu.vue';

const routes = [
  { path: '/', component: SignIn },
  { path: '/SignUp', component: SignUp },
  { path: '/ForgotPassword', component: ForgotPassword }, 
  { path: '/Menu', component: Menu },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
