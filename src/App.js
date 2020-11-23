import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
// import AuthRoute from './Components/AuthRoute'
import "./App.css";
import RoutesConfig from "./Components/RoutesConfig";
import routes from "./routes";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {routes.map((route) => (
              <li key={route.path}>
                <Link to={route.path}>{route.linkText}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          {routes.map((route) => (
            <RoutesConfig key={route.path} {...route} />
          ))}
          {/* <AuthRoute path="/about" auth={true}>
            <About />
          </AuthRoute>
          <AuthRoute path="/users" auth={true}>
            <Users />
          </AuthRoute>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
