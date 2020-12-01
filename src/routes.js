import Login from './Containers/Login'
import Admin from './Containers/Admin'
import AddProduct from './Containers/AddProduct'

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
  {
    path: "/addProduct",
    auth: true,
    component: AddProduct,
    linkText: 'Admin',
  },
];

export default routes;
