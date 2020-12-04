import { Switch } from "react-router-dom";
import { Router } from 'react-router'
// import AuthRoute from './Components/AuthRoute'
import "./App.css";
import RoutesConfig from "./Components/RoutesConfig";
import routes from "./routes";
import LocaleProvider from "./Context/localeContext";
import ProductsContext from "./Context/productsContext";
import ProductCategoriesContext from "./Context/productCategoriesContext";
import history from './utils/history'

function App() {
  return (
    <Router history={history}>
      <LocaleProvider>
        <ProductsContext>
          <ProductCategoriesContext>
            <Switch>
              {routes.map((route) => (
                <RoutesConfig key={route.path} {...route} />
              ))}
            </Switch>
          </ProductCategoriesContext>
        </ProductsContext>
      </LocaleProvider>
    </Router>
  );
}

export default App;
