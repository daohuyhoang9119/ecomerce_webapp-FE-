import { api } from "./config";

const Auth = { 
  login(data) {
    return api.post(`elearning/v4/login`, data);
  },
  register(form) {
   
    return api.post(`register`, form);
  },
  //update info account
  update(data) {
    return api.token().post(`update-profile`,data);
  },

  //wishlist
  create(data){
    return api.token().post('ecommerce/v1/profile/wishlist',data);
}
};



export default Auth;
