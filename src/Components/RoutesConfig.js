import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";

const RoutesConfig = (route) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const isAuth = async () => {
      try {
        const res = await localStorage.getItem("token");
        setToken(res);
      } catch (error) {}
    };
    isAuth();
  }, []);

  return (
    <Route
      path={route.path}
      render={(props) => {
        if (token || !route.auth) {
          return <route.component {...props} routes={route.routes} />;
        } else {
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />;
        }
      }}
    />
  );
};

export default RoutesConfig;
