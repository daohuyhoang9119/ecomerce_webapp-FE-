import { ERROR, LOGIN, LOGOUT, UPDATE, REGISTER,REGISTER_ERROR,  } from "../type";

// import reduxToolkit from "../../core/reduxToolkit";
// import Auth from "../../service/auth";
// import userApi from "../../service/userApi";

// let user = JSON.parse(localStorage.getItem("login"));

let initState = {
  login: JSON.parse(localStorage.getItem("login")) || false,
  data: JSON.parse(localStorage.getItem("data")) || false,
  dataUser: JSON.parse(localStorage.getItem("dataUser")) || '',
  loginError: "",
  regisError:"",
  regisSuccess: "",
  error: null,
  // wishList: JSON.parse(localStorage.getItem('WishList') || []),
  // wishList: JSON.parse(localStorage.getItem("WishList")) || [],
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: true,
        dataUser: action.payload,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        login: false,
      };
    case REGISTER:
      // let regisSuccess = state.regisSucces;
      // regisSuccess = 'Congratulations register successful!!! Please login again!';
      return {
        ...state,
        data: action.payload,
        regisSuccess: 'Congratulations register successful!!! Please login again!',
        regisError : "",
      };
    case REGISTER_ERROR:
      return {
        ...state,
        regisError: action.payload,
        regisSuccess: "",
      }
    case ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    case UPDATE:
      // localStorage.setItem("login", JSON.stringify(action.payload));
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
}

