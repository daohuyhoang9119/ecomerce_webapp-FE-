import { createStore, combineReducers, applyMiddleware, compose } from "redux";
//saga
import createSagaMiddleware from 'redux-saga'
import saga from "./saga";

//reducer
import authReducer from "./reducer/authReducer";
import productReducer from "./reducer/productReducer";
import cartReducer from './reducer/cartReducer';
// import userReducer from './reducer/userReducer';

let reducer = combineReducers({
  authReducer,
  productReducer,
  cartReducer,
});

//create saga
const sagaMiddleware = createSagaMiddleware();

//tự định nghĩa 1 middleware(thunk giả)
const middleware = (store) => (next) => (action) => {
  //function bên trong action, bth action là 1 object nhưng mờ khi gọi api nó là 1 async function 
  if (typeof action === "function") {
    return action(store.dispatch);
    //truyền dispatch vào trong cái function ở trong action đó

  } else {
    next(action);
  }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(middleware, sagaMiddleware)));

sagaMiddleware.run(saga);

export default store;
