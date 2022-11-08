import {ADD_CART, REMOVE_CART, INCREASE_PRODUCT, DECREASE_PRODUCT, CLEAR_CART} from "../type";

const listCart = JSON.parse(localStorage.getItem("cart")) || [];
let num = listCart.length;
let amount = JSON.parse(localStorage.getItem("amount")) || 0;

let initState = {
    listCart: listCart,
    num: num,
    amount: amount,
}

export default function cartReducer(state = initState, action){
    switch(action.type){
        case ADD_CART:{
           
            let { listCart, amount, num } = state;
            const index = listCart.findIndex((e) => e._id === action.payload._id);
            if (index !== -1) {
                //index !== -1 => Bị trùng thì nó cộng dồn vào
                action.payload.numCart = action.payload.num || 1;
                listCart[index].numCart = listCart[index].numCart + action.payload.numCart;
                amount = amount + listCart[index].real_price * action.payload.numCart;
            } else {
                //index === -1 => không có bị trùng thì nó add vào
                action.payload.numCart = action.payload.num || 1;
                listCart.push(action.payload);
                amount = amount + action.payload.real_price * action.payload.numCart;
            }
            localStorage.setItem("cart", JSON.stringify(listCart));
            localStorage.setItem("amount", JSON.stringify(amount));
            return {
                ...state,
                num: num + action.payload.numCart,
                listCart,
                amount,
            };
        }
        case REMOVE_CART:{
            
            let { listCart, amount, num } = state;
            const index = listCart.findIndex((e) => e._id === action.payload);
            amount = amount - listCart[index].numCart * listCart[index].real_price;
            num = num - listCart[index].numCart;
            if (index >= 0) {
                listCart.splice(index, 1);
            }
            localStorage.setItem("amount", JSON.stringify(amount));
            localStorage.setItem("cart", JSON.stringify(listCart));
            return {
                ...state,
                num,
                listCart,
                amount,
            };    
        }
        case INCREASE_PRODUCT:{
            let { listCart, amount, num } = state;
            const index = listCart.findIndex((e) => e._id === action.payload);
            if (index >= 0) {
                listCart[index].numCart++;
                amount += listCart[index].real_price;
            }
            localStorage.setItem("amount", JSON.stringify(amount));
            localStorage.setItem("cart", JSON.stringify(listCart));
            return {
                ...state,
                listCart,
                amount,
                num: num + 1,
            };
        }
        case DECREASE_PRODUCT:{
            let { listCart, amount, num } = state;
            const index = listCart.findIndex((e) => e._id === action.payload);
            if (index >= 0) {
                amount -= listCart[index].real_price;
                listCart[index].numCart--;
                if (listCart[index].numCart === 0) {
                listCart.splice(index, 1);
                }
            }
            localStorage.setItem("amount", JSON.stringify(amount));
            localStorage.setItem("cart", JSON.stringify(listCart));
            return {
                ...state,
                listCart,
                amount,
                num: num - 1,
            };
        }
        case CLEAR_CART:{
            let {listCart, amount, num} = state;
            listCart = [];
            amount = 0;
            num = 0;
            localStorage.removeItem("amount");
            localStorage.removeItem("cart");
            return {
                ...state,
                listCart,
                amount,
                num,
            };
        }
        default:
            return state;
    }
}