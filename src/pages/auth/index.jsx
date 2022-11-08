import React from "react";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

function Auth() {
  const { login } = useSelector((state) => state.authReducer);
  if (login) return <Redirect to="/account/info" />;

  return (
    <section className="py-12">
      <div className="container">
        <div className="row">
          <LogIn />
          <Register />
        </div>
      </div>
    </section>
  );
}

export default Auth;
