import {ADD_CART, REMOVE_CART, INCREASE_PRODUCT, DECREASE_PRODUCT, CLEAR_CART} from "../type";

export function addCart(cart) {
    return {
      type: ADD_CART,
      payload: cart,
    };
}

export function removeCart(id){
    return {
        type: REMOVE_CART,
        payload: id,
    };
}

export function increase(id){
    return {
        type: INCREASE_PRODUCT,
        payload :id,
    };
}

export function decrease(id){
    return {
        type: DECREASE_PRODUCT,
        payload :id,
    };
}

export function clearCartAction(){
    return {
        type: CLEAR_CART
    }
}