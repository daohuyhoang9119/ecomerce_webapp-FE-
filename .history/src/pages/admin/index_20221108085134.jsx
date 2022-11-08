import React from "react";
import { NavLink } from "react-router-dom";

function Admin() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
            {/* Icon */}
            <div className="mb-7 font-size-h1">🙁</div>
            {/* Heading */}
            <h2 className="mb-5">Admin</h2>
            {/* Button */}
            <NavLink className="btn btn-dark" to={`/`}>
              Go to Homepage
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
