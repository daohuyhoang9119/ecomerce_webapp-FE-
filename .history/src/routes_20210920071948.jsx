import MainLayout from "./layout/MainLayout";
import Page404 from "./pages/404";
import About from "./pages/about";
import Account from "./pages/account";
import AccountAddress from "./pages/account/components/AccountAddress";
import AccountInfo from "./pages/account/components/AccountInfo";
import AccountOrders from "./pages/account/components/AccountOrders";
import AccountPayment from "./pages/account/components/AccountPayment";
import AccountWishlist from "./pages/account/components/AccountWishlist";
import Auth from "./pages/auth";
import Blog from "./pages/blog";
import CheckOut from "./pages/checkout";
import ComingSoon from "./pages/coming-soon";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import Home from "./pages/home";
import Product from "./pages/product";
import ShippingReturns from "./pages/shipping-and-returns";
import Shop from "./pages/shop";
import ShoppingCart from "./pages/shopping-cart";
import Store from "./pages/store";
import OrderCompleted from "./pages/order-completed/index";
import AccountAddressEdit from "./pages/account/components/AccountAddressEdit";
import AccountPaymentMethod from "./pages/account/components/AccountPaymentMethod";
import AccountOrderList from "./pages/account/components/AccountOrderList";

let routes = [
  {
    component: MainLayout,
    routes: [
      {
        path: "/account",
        component: Account,
        auth: true,
        routes: [
          {
            path: "/account/address",
            component: AccountAddress,
          },
          {
            path: "/account/info",
            component: AccountInfo,
          },
          {
            path: "/account/payment",
            component: AccountPayment,
          },
          {
            path: "/account/address-edit",
            component: AccountAddressEdit,
          },
          {
            path: "/account/payment-method",
            component: AccountPaymentMethod,
          },
          {
            path: "/account/order-list",
            component: AccountOrderList,
          },
          {
            path: "/account/wishlist",
            component: AccountWishlist,
          },
          {
            path: "/account/order",
            component: AccountOrders,
            exact: true,
          },
        ],
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/checkout",
        component: CheckOut,
      },
      {
        path: "/contact",
        component: Contact,
      },
      {
        path: "/blog",
        component: Blog,
      },
      {
        path: "/auth",
        component: Auth,
      },
      {
        path: "/faq",
        component: Faq,
      },
      // {
      //   path:'/product',
      //   component: Product
      // },
      {
        exact: true,
        path: "/shop",
        component: Shop,
      },
      {
        path: "/shop/:slug",
        component: Product,
      },
      {
        path: "/order-completed",
        component: OrderCompleted,
      },
      {
        path: "/shopping-cart",
        component: ShoppingCart,
      },
      {
        path: "/shipping-returns",
        component: ShippingReturns,
      },
      {
        path: "/account",
        component: Account,
      },
      {
        path: "/store",
        component: Store,
      },
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/",
        component: Page404,
      },
    ],
  },

  {
    path: "/coming-soon",
    component: ComingSoon,
  },
];

export default routes;
