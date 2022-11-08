import { CATEGORY, PRODUCT, GET_NAME_CATEGORY, GET_VIEW_PRODUCT, LOADING, ADD_WISHLIST, REMOVE_WISHLIST, SEARCH } from "../type";

let initState = {
    categories: JSON.parse(localStorage.getItem("categories")) || [],
    product: JSON.parse(localStorage.getItem("localProduct")) || [],
    paginate: [],
    loading: true,
    category_name:'',
    product_detail:{},
    dataSearch: {},
    wishList: JSON.parse(localStorage.getItem("WishList")) || [],
    listSearch: [],
};
export default function productReducer(state = initState, action){
    switch(action.type){
        case CATEGORY:
            return{
                ...state,
                categories: action.payload,
            };
        case PRODUCT:
            return{
                ...state,
                loading: false,
                paginate: action.payload.paginate,
                product: action.payload.data,
            };
        // case PRODUCT_DETAIL:
        //     return{
        //         ...state,
        //         product_detail: action.payload,
        //     }
        case LOADING:
            return{
                ...state,
                loading: true,
            };
        case GET_NAME_CATEGORY:
            return{
                ...state,
                category_name: action.payload.title,
            }
        case GET_VIEW_PRODUCT:
            return{
                ...state,
                product_detail: action.payload,
            }
        case REMOVE_WISHLIST:{
            let { wishList } = state;
            
            const index = wishList.findIndex((e) => e._id === action.payload._id);            
            wishList.splice(index, 1);
            localStorage.setItem("WishList", JSON.stringify(wishList));
            return {
                ...state,
                wishList,
            };
        }
        case ADD_WISHLIST:{
            let { wishList } = state;
            let item = action.payload;
        
            wishList.push(item);
            console.log(wishList);
            localStorage.setItem("WishList", JSON.stringify(wishList));
            return {
                ...state,
                wishList
            };
        }
        case SEARCH:{
            return {
                ...state,
                listSearch: action.payload,
            }
        }
        case 'fetchDataHome':
            return{
                ...state,
                loading: false,
                dataSearch: action.payload,
            }
        default: {
            return state;
        }
    }
    
};