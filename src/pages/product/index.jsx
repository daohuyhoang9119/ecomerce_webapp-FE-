import React, { useState, useEffect, useRef } from "react";
import { useRouteMatch } from "react-router-dom";

import {  useDispatch } from "react-redux";
import ProductApi from "../../service/productApi";
import { addCart } from "../../redux/action/cartAction";
import { FormatCurrency } from "./../../utils/FormatCurrency";
import { useTranslate } from "../../core/Translate";
import Description from "./components/Description";
import Breadcrumb from "./../../components/Breadcrum";
import { addWishList } from './../../redux/action/authAction';
function Product() {
  // let $ = window.$;
  let dispatch = useDispatch();
  let thisRef = useRef();
  // let ref = useRef();
  let { t } = useTranslate();

  let [product, setProduct] = useState();
  let [currentImage, setCurrentImage] = useState(0);
  let [amount, setAmout] = useState(1);

  let { params } = useRouteMatch();
  console.log(`params: ${params.slug}`);

  useEffect(() => {
    ProductApi.productDetail(params.slug).then((res) => {
      if (res.data.length > 0) {
        setProduct(res.data[0]);
      }
    });
  }, [params.slug]);

  if (!product) return null;
  console.log(product);

  function _changeAmount(e) {
    setAmout(parseInt(e.target.value));
  }




  let real_price_text = FormatCurrency(product.real_price);
  let price_text = FormatCurrency(product.price);

  let { images, configurable_options } = product;

  return (
    <>
      <section className="product-detail">
        <Breadcrumb
          list={[
            {
              title: t("Home"),
              link: "/",
            },
            {
              title: t("Catalog"),
              link: "/catalog",
            },
            {
              title: product.name,
              link: "/",
            },
          ]}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-md-6">
                  {/* Card */}
                  <div className="card">
                    {/* Badge */}
                    {product.discount_rate ? (
                      <div className="badge badge-primary card-badge text-uppercase ">
                        - {product.discount_rate}%
                      </div>
                    ) : null}

                    {/* Slider */}
                    <div
                      className="mb-4"
                      //data-flickity='{"draggable": false, "fade": true}'
                      id="productSlider"
                    >
                      {images.map((e, i) => (
                        <a
                          href={e.large_url}
                          className={currentImage === i ? "active" : ""}
                        >
                          <img
                            src={e.medium_url}
                            alt="..."
                            className="card-img-top"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* Slider */}
                  <div
                    ref={thisRef}
                    className="flickity-nav mx-n2 mb-10 mb-md-0"
                    data-flickity='{"asNavFor": "#productSlider", "contain": true, "wrapAround": false}'
                  >
                    {/* Item */}
                    {product.images.map((e) => (
                      <div
                        className="col-12 px-2"
                        style={{ maxWidth: "113px" }}
                      >
                        <div
                          className="embed-responsive embed-responsive-1by1 bg-cover"
                          style={{ backgroundImage: `url(${e.medium_url})` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-12 col-md-6 pl-lg-10">
                  {/* Header */}
                  <div className="row mb-1">
                    <div className="col">
                      {/* Preheading */}
                      <a className="text-muted" href="shop.html">
                        {t("Sneakers")}
                      </a>
                    </div>
                    <div className="col-auto">
                      {/* Rating */}
                      <div
                        className="rating font-size-xs text-dark"
                        data-value={4}
                      >
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                      </div>
                      <a
                        className="font-size-sm text-reset ml-2"
                        href="#reviews"
                      >
                        {t("Reviews")} (6)
                      </a>
                    </div>
                  </div>
                  {/* Heading */}
                  <h3 className="mb-2">{product.name}</h3>
                  {/* Price */}
                  <div className="mb-7">
                    <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">
                      {price_text}
                    </span>
                    <span className="ml-1 font-size-h5 font-weight-bolder text-primary">
                      {real_price_text} VND
                    </span>
                    <span className="font-size-sm ml-1">
                      ({product.stock_item.qty > 0 ? "Còn hàng" : "Hết hàng"})
                    </span>
                  </div>
                  {/* Form */}
                  {configurable_options?.map((e, i) => (
                    <div className="form-group product-option" key={i}>
                      {/* Label */}

                      <p className="mb-5">
                        {e.name} :{" "}
                        {e.values.map((e1, i1) => (
                          <span className="option-value" key={i1}>
                            {e1.label}
                          </span>
                        ))}
                      </p>
                      {/* Radio */}
                      {/* <div className="mb-8 ml-n1">
                                                    {
                                                        configurable_products.map((e, i) => (
                                                            e.images.map((e1, i1) => <div className="custom-control custom-control-inline custom-control-img" key={i + '-' + i1}>
                                                                <input type="radio" className="custom-control-input" id="imgRadioOne" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" defaultValue="White" defaultChecked />
                                                                <label className="custom-control-label" htmlFor="imgRadioOne">
                                                                    <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${e1.small_url})` }} />
                                                                </label>
                                                            </div>)

                                                        ))
                                                    }


                                                </div> */}
                    </div>
                  ))}

                  <div className="form-group">
                    <div className="form-row mb-7">
                      <div className="col-12 col-lg-auto">
                        {/* Quantity */}
                        <select
                          className="custom-select mb-2"
                          onChange={_changeAmount}
                        >
                          {[...Array(10)].map((e, i) => (
                            <option value={i + 1} selected={i + 1 === amount}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-12 col-lg">
                        {/* Submit */}
                        <button
                          type="submit"
                          className="btn btn-block btn-dark mb-2"
                          onClick={() =>
                            dispatch(addCart({ ...product, cartNum: amount }))
                          }
                        >
                          {t("Add to Cart")}{" "}
                          <i className="fe fe-shopping-cart ml-2" />
                        </button>
                      </div>
                      <div className="col-12 col-lg-auto">
                        {/* Wishlist */}
                        <button
                          className="btn btn-outline-dark btn-block mb-2"
                          data-toggle="button"
                          onClick={()=>
                            dispatch(addWishList({...product}))
                          }
                        >
                          {t("Wishlist")} <i className="fe fe-heart ml-2" />
                        </button>
                      </div>
                    </div>
                    {/* Share */}
                    <p className="mb-0">
                      <span className="mr-4">{t("Share")}:</span>
                      <a
                        className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
                        href="#!"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
                        href="#!"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
                        href="#!"
                      >
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Description description={product.description} />
    </>
  );
}

export default Product;
