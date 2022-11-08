import React from "react";
import ReactDOM from "react-dom";
import {useTranslate} from "../core/Translate";
import ModalCartItem from './ModalCartItem';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {FormatCurrency} from "../utils/FormatCurrency";

export function ModalCart() {
  let { t } = useTranslate();
  
  //cart
  const {listCart, num, amount} = useSelector(state => state.cartReducer); 
  
  return ReactDOM.createPortal(
    <div
      className="modal fixed-right fade"
      id="modalShoppingCart"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-vertical" role="document">
        {/* Full cart (add `.d-none` to disable it) */}
        <div className="modal-content">
          {/* Close */}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Header*/}
          <div className="modal-header line-height-fixed font-size-lg">
            <strong className="mx-auto">Your Cart ({num})</strong>
          </div>
          {/* List group */}
          <ul className="list-group list-group-lg list-group-flush">
            {/* <CartItem /> */}
            {
              num <= 0 ? (
                <div class="modal-body flex-grow-0 my-auto">
                  <h6 class="mb-7 text-center">Your cart is empty 😞</h6>
  
                  <Link class="btn btn-block btn-outline-dark" to="/shop">
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                listCart.map((e, i) => <ModalCartItem key={e._id} {...e}/>)
              )
            }
          </ul>
          {/* Footer */}
          <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
            <strong>{t("Subtotal")}</strong>{" "}
            <strong className="ml-auto subtotal_price-cart-scss">{FormatCurrency(amount)}VND</strong>
          </div>
          {/* Buttons */}
          <div className="modal-body">
            <Link className="btn btn-block btn-dark" to="/checkout">
              {t("Continue to Checkout")}
            </Link>
            {
              amount > 0 ? (
                <Link
                  className="btn btn-block btn-outline-dark"
                  to="/ship"
                >
                  View Cart
                </Link>
              ) : (
                <Link
                  className="btn btn-block btn-outline-dark"
                  to="/shop"
                >
                  View Cart
                </Link>
              )
            }
          </div>
        </div>
        {/* Empty cart (remove `.d-none` to enable it) */}
        <div className="modal-content d-none">
            {/* Close */}
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fe fe-x" aria-hidden="true" />
            </button>
            {/* Header*/}
            <div className="modal-header line-height-fixed font-size-lg">
                <strong className="mx-auto">{t('Your Cart')} ({num})</strong>
            </div>
            {/* Body */}
            <div className="modal-body flex-grow-0 my-auto">
                {/* Heading */}
                <h6 className="mb-7 text-center">{t('Your cart is empty')} 😞</h6>
                {/* Button */}
                <a className="btn btn-block btn-outline-dark" href="#!">
                    {t('Continue Shopping')}
                </a>
            </div>
        </div>
        
      </div>
    </div>,
    document.getElementById("root2")
  );
}
