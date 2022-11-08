import Auth from "../../service/auth";
import { LOGIN,LOGOUT,ERROR,REGISTER,REGISTER_ERROR,UPDATE, AUTH_FETCH_LOGIN, LOGIN_ERROR,AUTH_FETCH_REGISTER, ADD_WISHLIST, REMOVE_WISHLIST } from "../type";


//function use redux-saga
export function fetchLogin(form){
    return {
        type: AUTH_FETCH_LOGIN,
        payload : form,
    };
}

export function fetchRegister(form){
    return {
        type: AUTH_FETCH_REGISTER,
        payload: form,
    }
}

//normal action

export function registerError(data){
    return {
        type: REGISTER_ERROR,
        payload : data,
    }
}

export function loginError(data){
    return {
        type: LOGIN_ERROR,
        payload: data,
    }
}

export function loginAction(data) {
    return {
        type: LOGIN,
        payload: data,
    }
}
export function logoutAction(data){
    return {    
        type:LOGOUT
    }
}


export function registerAction(data){
    return {
        type: REGISTER,
        payload : data,
    }
}
export function updateAction(data){
    return async (dispatch) => {
        let res = await Auth.update(data)
        if (res?.data) {
            dispatch({
                type: UPDATE,
                payload: res.data
            })
        } else if (res.error) {
            dispatch({
                type: ERROR,
                payload: res.error,
            });
        }
    }
}

//wishlist
export function addWishList(item){
    return {
        type: ADD_WISHLIST,
        payload: item,
    }
}
export function removeWishList(id){
    return {
        type: REMOVE_WISHLIST,
        payload: id,
    }
}

