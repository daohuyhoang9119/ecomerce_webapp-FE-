import { put, select, call } from 'redux-saga/effects';
import { clearCartAction } from './../action/cartAction';
import cartApi from './../../service/cartApi';


export function* logOutClearCart(){
    yield put(clearCartAction());
}
export function* updateCartToBE(action){
    let state = yield select();
    console.log(state);
    
    if(state.authReducer.login){
        yield call(cartApi.create, state.cartReducer);
    }
}