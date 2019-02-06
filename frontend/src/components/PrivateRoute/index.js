import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from  '../../services/authentication';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);

export default PrivateRoute;