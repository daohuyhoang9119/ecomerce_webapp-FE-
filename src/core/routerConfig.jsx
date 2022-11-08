import { PrivateRoute } from "./PrivateRoute";
import { Route } from 'react-router-dom';

export function RouteWithSubRoutes(route) {
    if(route.auth){
      return (
        <PrivateRoute
          path={route.path}
          render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} exact={route.exact}/>
          )}
        />
      );
    }
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} exact={route.exact}/>
        )}
      />
    );
  }