import { Route } from "react-router-dom";

const RoutesConfig = (route) => {
  return (
    <Route
      path={route.path}
      render={(props) => {
        console.log("🚀 ~ file: RoutesConfig.js ~ line 12 ~ RoutesConfig ~ props", props)
        console.log(route.component);
        return <route.component {...props} routes={route.routes} />;
      }}
    />
  );
      
};

export default RoutesConfig;
