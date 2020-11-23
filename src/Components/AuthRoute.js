import React, { Children } from "react";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ auth, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
