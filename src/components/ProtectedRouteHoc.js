import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { bool, any, object } from "prop-types";

const ProtectedRouteHoc = ({ component: Component, isLoggedIn, ...rest }) => {
  if (isLoggedIn || rest.public) {
    console.log("admin");
    return (
      <Route
        {...rest}
        render={props => {
          return <Component {...props} />;
        }}
      />
    );
  }
  return <Redirect to={{ pathname: "/login" }} />;
};

ProtectedRouteHoc.propTypes = {
  component: any,
  isLoggedIn: bool,
  rest: object,
  props: object
};

export default withRouter(ProtectedRouteHoc);
