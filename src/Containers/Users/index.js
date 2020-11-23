import React from "react";
import { Link, Switch, useRouteMatch } from "react-router-dom";
import RoutesConfig from "../../Components/RoutesConfig";

const Index = ({ routes }) => {
  console.log("🚀 ~ file: index.js ~ line 27 ~ Index ~ routes", routes);
  let match = useRouteMatch();
  console.log("🚀 ~ file: index.js ~ line 6 ~ index ~ match", match);
  return (
    <div>
      Users Page
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.linkText}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        {routes.map((route) => (
          <RoutesConfig key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default Index;
