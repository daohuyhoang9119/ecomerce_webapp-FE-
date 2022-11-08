import React from "react";
import {  Switch, useRouteMatch, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslate } from "../../core/Translate";


import { RouteWithSubRoutes } from "../../core/routerConfig";
import { logoutAction } from "../../redux/action/authAction";

function Account({routes}) {
  // let { path } = useRouteMatch();
  let dispatch = useDispatch();
  let match = useRouteMatch();
  let { t } = useTranslate();

  function _logout(e) {
    e.preventDefault();
    dispatch(logoutAction());
  }

  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* Heading */}
            <h3 className="mb-10">{t("My Account")}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            {/* Nav */}
            <nav className="mb-10 mb-md-0">
              <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                <NavLink
                  className="list-group-item list-group-item-action dropright-toggle "
                  // to={`${path}`}
                  to={`${match.path}/order`}
                  // exact
                >
                  {t("Orders")}
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action dropright-toggle "
                  // to={`${path}/wisht-list`}
                  to={`${match.path}/wishlist`}
                >
                  {t("Wishlist")}
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action dropright-toggle "
                  // to={`${path}/info`}
                  exact
                  to={`${match.path}/info`}
                >
                  {t("Personal Info")}
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action dropright-toggle "
                  // to={`${path}/address`}
                  to={`${match.path}/address`}
                >
                  {t("Addresses")}
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action dropright-toggle "
                  // to={`${path}/payment`}
                  to={`${match.path}/payment`}
                >
                  {t("Payment Methods")}
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action dropright-toggle"
                  // to={`#`}
                  to={`${match.path}/logout`}
                  onClick={_logout}
                >
                  {t("Logout")}
                </NavLink>
              </div>
            </nav>
          </div>
          <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <Switch>
              {/* <Route
                path={`${match.path}/address`}
                component={AccountAddress}
              />
              <Route 
                path={`${match.path}/info`} 
                component={AccountInfo} 
              />
              <Route
                path={`${match.path}/payment`}
                component={AccountPayment}
              />
              <Route
                path={`${match.path}/wishlist`}
                component={AccountWishlist}
              />
              <Route component={AccountOrders} /> */}
              {
                routes.map((route,i) => (
                  <RouteWithSubRoutes key={i} {...route}/>
                ))
              }
            </Switch>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
