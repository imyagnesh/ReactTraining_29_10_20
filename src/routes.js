import About from './Containers/About'
import Home from './Containers/Home'
import Users from './Containers/Users'
import NoMatch from "./Containers/NoMatch.jsx";
import User1 from './Containers/Users/User1';
import User2 from './Containers/Users/User2';

const routes = [
  {
    path: "/",
    exact: true,
    auth: false,
    component: Home,
    linkText: 'Home'
  },
  {
    path: "/users",
    auth: true,
    component: Users,
    linkText: 'users',
    routes: [
        {
            path: "/users/bus",
            component: User1,
            linkText: 'Bus',
          },
          {
            path: "/users/cart",
            component: User2,
            linkText: 'Cart',
          }
    ]
  },
  {
    path: "/about",
    auth: true,
    component: About,
    linkText: 'About',
  },
  {
    path: "*",
    auth: true,
    component: NoMatch
  },
];

export default routes;
