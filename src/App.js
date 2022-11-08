import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";

//css
import "./assets/style/custom.scss";

// redux
import store from "./redux";

//translate
import TranslateProvider from "./core/Translate";
import vi from "./translate/vi.json";

import { RouteWithSubRoutes } from "./core/routerConfig";
import routes from "./routes";

let translate = {
  vn: vi,
};

function App() {
  return (
    <TranslateProvider translate={translate}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </BrowserRouter>
      </Provider>
    </TranslateProvider>
  );
}

export default App;
