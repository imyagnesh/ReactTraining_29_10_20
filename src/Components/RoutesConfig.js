import { Route } from "react-router-dom";

const RoutesConfig = (route) => {
  return (
    <Route
      path={route.path}
      render={(props) => {
        return <route.component {...props} routes={route.routes} />;
      }}
    />
  );
      
};

export default RoutesConfig;
