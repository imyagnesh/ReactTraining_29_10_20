import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
// import AuthRoute from './Components/AuthRoute'
import "./App.css";
import RoutesConfig from "./Components/RoutesConfig";
import routes from "./routes";
import LocaleProvider from './Context/localeContext'

function App() {
  return (
    <Router>
      <LocaleProvider>
      <Switch>
        {routes.map((route) => (
          <RoutesConfig key={route.path} {...route} />
        ))}
      </Switch>
      </LocaleProvider>
    </Router>
  );
}

export default App;
