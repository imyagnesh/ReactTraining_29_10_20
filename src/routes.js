import Login from './Containers/Login'

const routes = [
  {
    path: "/",
    exact: true,
    auth: false,
    component: Login,
    linkText: 'Login',
    authRequired: false
  },
];

export default routes;
