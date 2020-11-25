import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
// import AuthRoute from './Components/AuthRoute'
import "./App.css";
import RoutesConfig from "./Components/RoutesConfig";
import routes from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <RoutesConfig key={route.path} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
