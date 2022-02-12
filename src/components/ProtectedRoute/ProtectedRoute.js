import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ path, isLogedIn, children, ...props }) {
  return (
    <Route path={path}>
      {!isLogedIn && <Redirect to="/"/>}
      {children}
    </Route>
  );
}

export default ProtectedRoute;
