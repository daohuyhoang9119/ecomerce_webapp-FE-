import { NavLink } from "react-router-dom"


export default function TopSellerItem(){

    return (
        <div className="col-6 col-md-4 col-lg-3">
                {/* Card */}
                <div className="card mb-7">
                  {/* Badge */}
                  <div className="badge badge-white card-badge card-badge-left text-uppercase">
                    New
                  </div>
                  {/* Image */}
                  <div className="card-img">
                    {/* Image */}
                    <NavLink className="card-img-hover" to="/product">
                      <img
                        className="card-img-top card-img-back"
                        src="/img/products/product-120.jpg"
                        alt="..."
                      />
                      <img
                        className="card-img-top card-img-front"
                        src="/img/products/product-5.jpg"
                        alt="..."
                      />
                    </NavLink>
                    {/* Actions */}
                    <div className="card-actions">
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="modal"
                          data-target="#modalProduct"
                        >
                          <i className="fe fe-eye" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-shopping-cart" />
                        </button>
                      </span>
                      <span className="card-action">
                        <button
                          className="btn btn-xs btn-circle btn-white-primary"
                          data-toggle="button"
                        >
                          <i className="fe fe-heart" />
                        </button>
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                      <a className="text-muted" href="shop.html">
                        Shoes
                      </a>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                      <a className="text-body" href="product.html">
                        Leather mid-heel Sandals
                      </a>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">$129.00</div>
                  </div>
                </div>
              </div>



    )
}