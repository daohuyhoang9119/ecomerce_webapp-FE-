import { api } from "./config";

const cartApi = {

    create:(data)=>{
        // return fetch('http://cfd-reactjs.herokuapp.com/ecommerce/v1/cart',{}).then(res => res.json(data));
        return api.token().post(`ecommerce/v1/cart`, data);
    },

    getCartFromUser: ()=>{
        return api.token().get('ecommerce/v1/cart');
    }
}
export default cartApi;