
import { api, endpoint } from "./config";
const ProductApi = {
    category(){
        // return fetch('http://cfd-reactjs.herokuapp.com/categories',{}).then(res => res.json());
        return api.get(`categories`);
    },
    product(slug){
        // return fetch(`http://cfd-reactjs.herokuapp.com/product?${slug}`,{}).then(res => res.json());
        return api.get(`product?${slug}`);
    },
    productView(slug){
        // return fetch(`http://cfd-reactjs.herokuapp.com/product?slug=${slug}`,{}).then(res => res.json());
        return api.get(`product?slug=${slug}`);
    },
    productDetail(slug){
        // return api.get(`product?slug=${slug}`);
        return fetch(`${endpoint}product?slug=${slug}`).then(res => res.json());
    },
    searchProduct(slug){
        // return fetch(`http://cfd-reactjs.herokuapp.com/product?search=${slug}`,{}).then(res => res.json);
        return api.get(`product?search=${slug}`);
    }
    
}

export default ProductApi;