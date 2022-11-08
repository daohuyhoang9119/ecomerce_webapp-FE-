import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../redux/action/cartAction";
export default function ModalProduct() {
  let dispatch = useDispatch();

  let { product_detail } = useSelector((state) => state.productReducer);
  const handleAddCart = (e) => {
    e.preventDefault();

    addCart(product_detail);
    console.log("da add cart");
  };

  return ReactDOM.createPortal(
    <div
      className="modal fade"
      id="modalProduct"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-xl"
        role="document"
      >
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
          {/* Content */}
          <div className="container-fluid px-xl-0">
            <div className="row align-items-center mx-xl-0">
              <div className="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">
                {/* Image */}
                <img
                  className="img-fluid"
                  src={product_detail.thumbnail_url}
                  alt="..."
                />
                {/* Button */}
                <a
                  className="btn btn-sm btn-block btn-primary"
                  href="./product.html"
                >
                  More Product Info <i className="fe fe-info ml-2" />
                </a>
              </div>
              <div className="col-12 col-lg-6 col-xl-7 py-9 px-md-9">
                {/* Heading */}
                <h4 className="mb-3">{product_detail.name}</h4>
                {/* Price */}
                <div className="mb-7">
                  <span className="h5">{product_detail.real_price} VND </span>
                  <br />
                  <span className="font-size-sm">(In Stock)</span>
                </div>
                {/* Form */}
                <form>
                  <div className="form-group">
                    {/* Label */}
                    {product_detail.option_color && (
                      <p>
                        Color:{" "}
                        <strong id="modalProductColorCaption">
                          {product_detail.option_color}
                        </strong>
                      </p>
                    )}
                    {/* Radio */}
                    <div className="mb-8 ml-n1">
                      <div className="custom-control custom-control-inline custom-control-img">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="modalProductColorOne"
                          name="modalProductColor"
                          data-toggle="form-caption"
                          data-target="#modalProductColorCaption"
                          defaultValue="White"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="modalProductColorOne"
                        >
                          <span
                            className="embed-responsive embed-responsive-1by1 bg-cover"
                            style={{ backgroundImage: `url()` }}
                          />
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-img">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="modalProductColorTwo"
                          name="modalProductColor"
                          data-toggle="form-caption"
                          data-target="#modalProductColorCaption"
                          defaultValue="Black"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="modalProductColorTwo"
                        >
                          <span
                            className="embed-responsive embed-responsive-1by1 bg-cover"
                            style={{ backgroundImage: `url()` }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-0">
                    <div className="form-row">
                      <div className="col-12 col-lg-auto">
                        {/* Quantity */}
                        <select className="custom-select mb-2">
                          <option value={1} selected>
                            1
                          </option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                      </div>
                      <div className="col-12 col-lg">
                        {/* Submit */}
                        <button
                          type="submit"
                          className="btn btn-block btn-dark mb-2"
                          onClick={handleAddCart}
                        >
                          Add to Cart <i className="fe fe-shopping-cart ml-2" />
                        </button>
                      </div>
                      <div className="col-12 col-lg-auto">
                        {/* Wishlist */}
                        <button
                          className="btn btn-outline-dark btn-block mb-2"
                          data-toggle="button"
                        >
                          Wishlist <i className="fe fe-heart ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root2")
  );
}
