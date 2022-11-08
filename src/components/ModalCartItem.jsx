import React from "react";
import {useTranslate} from "../core/Translate";
import { useDispatch } from 'react-redux';

import {removeCart,decrease,increase} from "../redux/action/cartAction"
import {FormatCurrency} from "../utils/FormatCurrency";

export default function ModalCartItem(props) {
  let { t } = useTranslate();
  const dispatch = useDispatch();

  function handleRemoveCart(e){
    console.log('vao phan xoa');
    e.preventDefault();
    dispatch(removeCart(props._id))
  } 


  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-3">
          {/* Image */}
          <a href="product.html">
            <img
              src={props.thumbnail_url}
              alt="..."
              className="img-fluid"
            />
          </a>
        </div>
        <div className="col">
          {/* Title */}
          <div className="d-flex mb-2 font-weight-bold cart-item-scss">
            <a className="text-body" href="product.html">
              {props.name}
            </a>{" "}
            <span className="text-muted">{FormatCurrency(props.real_price)} VND</span>
          </div>
          {/* Text */}
          {/* <p className="mb-7 font-size-sm text-muted">{t("Color: Brown")} </p> */}
          {/*Footer */}
          <div className="d-flex align-items-center count_remove_scss">
            {/* Select */}
            {/* <div className="inputCartItem">
              <button
                  className="plus"
                  onClick={() => {
                    dispatch(decrease(props._id));
                  }}
                >
                  -
              </button>
              <input
                value={props.numCart}
                type='text'
                className="custom-select custom-select-xxs w-auto"
              />
              <button
                className="minus"
                onClick={() => {
                  dispatch(increase(props._id));
                }}
              >
                +
              </button>
            </div> */}

            {/* new */}
            <div className="inputCartItem">
              <div class="value-button" id="decrease"  value="Decrease Value"
              onClick={() => {
                dispatch(decrease(props._id));
              }}>
                -
              </div>

              <input type="number" id="number" value={props.numCart} />
              
              <div class="value-button" id="increase"  value="Increase Value"
              onClick={() => {
                dispatch(increase(props._id));
              }}>
                +
              </div>
            </div>
            {/* Remove */}
            <a className="font-size-xs text-gray-400 ml-auto" href="#!" onClick={handleRemoveCart}>
              <i className="fe fe-x" /> {t("Remove")}
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

//dispatch(removeCart(props._id))