import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";

export function PrivateRoute(props) {
  let { login } = useSelector((store) => store.authReducer);
  if (!login) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
}
