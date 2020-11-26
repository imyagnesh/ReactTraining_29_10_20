import Login from './Containers/Login'
import Admin from './Containers/Admin'

const routes = [
  {
    path: "/",
    exact: true,
    auth: false,
    component: Login,
    linkText: 'Login',
  },
  {
    path: "/admin",
    auth: true,
    component: Admin,
    linkText: 'Admin',
  },
];

export default routes;
