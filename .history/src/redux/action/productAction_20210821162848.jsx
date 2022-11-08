import ProductApi from "../../service/productApi";
import { CATEGORY, GET_VIEW_PRODUCT, PRODUCT, LOADING, FETCH_CATEGORY, SEARCH } from "../type";

export function categoryAction(){
    return async (dispatch) => {
        let res = await ProductApi.category();
        
        if(res){
            dispatch({
                type: CATEGORY,
                payload: res,
              });
        }

    };
}

export function fetchCategory(res) {
    return {
      type: FETCH_CATEGORY,
    };
  }
  

export function productAction(url){
    return async (dispatch)=>{
        let res = await ProductApi.product(url);
        if(res){
            dispatch({
                type: PRODUCT,
                payload : res,
            })
        }
    }
}

export function productViewAction(data){
    // console.log(data);
    return {
        type: GET_VIEW_PRODUCT,
        payload :data,
    }
}

// export function productDetail(data){
//     console.log('data product detail',data);
//     return async (dispatch)=>{
//         let res = await ProductApi.productDetail(data);
//         if(res){
//             dispatch({
//                 type:PRODUCT_DETAIL,
//                 payload: res,
//             })
//         }
//     }
// }

export function loadingAction(){
    return{
        type:LOADING,
    }
}

export function fetchSearch(keyword){
    return async (dispatch)=>{
        let res = await ProductApi.searchProduct(keyword);
        if(res){
            dispatch({
                type: SEARCH,
                payload: res.data,
            })
        }
    }
}