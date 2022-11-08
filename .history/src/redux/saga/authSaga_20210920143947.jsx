import { call, put } from "redux-saga/effects";
import {
  loginAction,
  loginError,
  registerAction,
  registerError,
} from "../action/authAction";
import Auth from "./../../service/auth";

export function* fetchLogin(action) {
  let res = yield call(Auth.login, action.payload);
  if (res.error) {
    yield put(loginError(res.error));
  } else {
    localStorage.setItem("tokenUser", JSON.stringify(res.data.token));
    localStorage.setItem("dataUser", JSON.stringify(res.data));
    localStorage.setItem("localLogin", JSON.stringify(true));
    yield put(loginAction(res.data));
  }
}

export function* fetchRegister(action) {
  let res = yield call(Auth.register, action.payload);
  if (res.error) {
    yield put(registerError(res.error));
  } else {
    yield put(registerAction(res.data));
  }
}
