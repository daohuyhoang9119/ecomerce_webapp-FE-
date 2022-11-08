
import { takeLatest } from "redux-saga/effects";
import { logOutClearCart, updateCartToBE } from "./cartSaga";
import { fetchLogin, fetchRegister} from "./authSaga";
import { ADD_CART, AUTH_FETCH_LOGIN, AUTH_FETCH_REGISTER, INCREASE_PRODUCT, REMOVE_CART } from "../type";
import { DECREASE_PRODUCT } from './../type';


export default function* saga(){
    yield takeLatest('LOGOUT', logOutClearCart);
    yield takeLatest(AUTH_FETCH_LOGIN, fetchLogin);
    yield takeLatest(AUTH_FETCH_REGISTER, fetchRegister);


    //cart
    yield takeLatest([ADD_CART, REMOVE_CART, INCREASE_PRODUCT, DECREASE_PRODUCT], updateCartToBE);
}