// 同步组件
// import Home from '../pages/home';
// import Login from '../pages/login';
// import Say from '../pages/say';
// import Welcome from '../pages/welcome';

// 异步组件
import asyncComponent from '../components/AsyncComponent';

const Home = asyncComponent(() => import('../pages/home'));
const Login = asyncComponent(() => import('../pages/login'));
const Say = asyncComponent(() => import('../pages/say'));
const Welcome = asyncComponent(() => import('../pages/welcome'));

export const routerConfig = [
  {
    path: '/',
    component: Home,
  }, {
    path: '/login',
    component: Login,
  }, {
    path: '/welcome',
    component: Welcome,
  }, {
    path: '/say',
    component: Say,
    auth: true,
  },
];
