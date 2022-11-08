import React from "react";
import { useTranslate } from "../../../core/Translate";
import { Link, useRouteMatch } from 'react-router-dom';

function AccountOrders() {
  let { t } = useTranslate();
  let {url} = useRouteMatch();

  return (
    <>
      <div className="card card-lg mb-5 border">
        <div className="card-body pb-0">
          {/* Info */}
          <div className="card card-sm">
            <div className="card-body bg-light">
              <div className="row">
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">{t(`Order No:`)}</h6>
                  {/* Text */}
                  <p className="mb-lg-0 font-size-sm font-weight-bold">
                    673290789
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">
                    {t(`Shipped date:`)}
                  </h6>
                  {/* Text */}
                  <p className="mb-lg-0 font-size-sm font-weight-bold">
                    <time dateTime="2019-10-01">{t(`01 Oct, 2019`)}</time>
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">{t(`Status:`)}</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm font-weight-bold">
                    {t(`Awating Delivery`)}
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">
                    {t(`Order Amount:`)}
                  </h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm font-weight-bold">
                    {t(`$259.00`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="form-row mb-4 mb-lg-0">
                <div className="col-3">
                  {/* Image */}
                  <div
                    className="embed-responsive embed-responsive-1by1 bg-cover"
                    style={{
                      backgroundImage: "url(/img/products/product-5.jpg)",
                    }}
                  />
                </div>
                <div className="col-3">
                  {/* Image */}
                  <div
                    className="embed-responsive embed-responsive-1by1 bg-cover"
                    style={{
                      backgroundImage: "url(/img/products/product-112.jpg)",
                    }}
                  />
                </div>
                <div className="col-3">
                  {/* Image */}
                  <div
                    className="embed-responsive embed-responsive-1by1 bg-cover"
                    style={{
                      backgroundImage: "url(/img/products/product-7.jpg)",
                    }}
                  />
                </div>
                <div className="col-3">
                  {/* Image */}
                  <div className="embed-responsive embed-responsive-1by1 bg-light">
                    <a
                      className="embed-responsive-item embed-responsive-item-text text-reset"
                      href="#!"
                    >
                      <div className="font-size-xxs font-weight-bold">
                        +2 <br /> {t(`more`)}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="form-row">
                <div className="col-6">
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-block btn-outline-dark"
                    to={`${url}-list`}
                  >
                    {t(`Order Details`)}
                  </Link>
                </div>
                <div className="col-6">
                  {/* Button */}
                  <a
                    className="btn btn-sm btn-block btn-outline-dark"
                    href="#!"
                  >
                    {t(`Track order`)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Order */}
      <div className="card card-lg mb-5 border">
        <div className="card-body pb-0">
          {/* Info */}
          <div className="card card-sm">
            <div className="card-body bg-light">
              <div className="row">
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">{t(`Order No:`)}</h6>
                  {/* Text */}
                  <p className="mb-lg-0 font-size-sm font-weight-bold">
                    871090437
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">
                    {t(`Shipped date:`)}
                  </h6>
                  {/* Text */}
                  <p className="mb-lg-0 font-size-sm font-weight-bold">
                    <time dateTime="2019-09-25">{t(`25 Sep, 2019`)}</time>
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">{t(`Status:`)}</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm font-weight-bold">
                    {t(`In Processing`)}
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">
                    {t(`Order Amount:`)}
                  </h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm font-weight-bold">
                    {t(`$75.00`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="form-row mb-4 mb-lg-0">
                <div className="col-3">
                  {/* Image */}
                  <div
                    className="embed-responsive embed-responsive-1by1 bg-cover"
                    style={{
                      backgroundImage: "url(/img/products/product-11.jpg)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="form-row">
                <div className="col-6">
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-block btn-outline-dark"
                    to={`${url}-list`}
                  >
                    {t(`Order Details`)}
                  </Link>
                </div>
                <div className="col-6">
                  {/* Button */}
                  <a
                    className="btn btn-sm btn-block btn-outline-dark"
                    href="#!"
                  >
                    {t(`Track order`)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Order */}
      <div className="card card-lg mb-5 border">
        <div className="card-body pb-0">
          {/* Info */}
          <div className="card card-sm">
            <div className="card-body bg-light">
              <div className="row">
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">{t(`Order No:`)}</h6>
                  {/* Text */}
                  <p className="mb-lg-0 font-size-sm font-weight-bold">
                    891230563
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">
                    {t(`Shipped date:`)}
                  </h6>
                  {/* Text */}
                  <p className="mb-lg-0 font-size-sm font-weight-bold">
                    <time dateTime="2019-09-07">07 Sep, 2019</time>
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">{t(`Status:`)}</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm font-weight-bold">
                    {t(`Delivered`)}
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">
                    {t(`Order Amount:`)}
                  </h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm font-weight-bold">
                    {t(`$69.00`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="form-row mb-4 mb-lg-0">
                <div className="col-3">
                  {/* Image */}
                  <div
                    className="embed-responsive embed-responsive-1by1 bg-cover"
                    style={{
                      backgroundImage: "url(/img/products/product-14.jpg)",
                    }}
                  />
                </div>
                <div className="col-3">
                  {/* Image */}
                  <div
                    className="embed-responsive embed-responsive-1by1 bg-cover"
                    style={{
                      backgroundImage: "url(/img/products/product-15.jpg)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="form-row">
                <div className="col-6">
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-block btn-outline-dark"
                    to={`${url}-list`}
                  >
                    {t(`Order Details`)}
                  </Link>
                </div>
                <div className="col-6">
                  {/* Button */}
                  <a
                    className="btn btn-sm btn-block btn-outline-dark"
                    href="#!"
                  >
                    {t(`Track order`)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <nav className="d-flex justify-content-center justify-content-md-end mt-10">
        <ul className="pagination pagination-sm text-gray-400">
          <li className="page-item">
            <a className="page-link page-link-arrow" href="#">
              <i className="fa fa-caret-left" />
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              6
            </a>
          </li>
          <li className="page-item">
            <a className="page-link page-link-arrow" href="#">
              <i className="fa fa-caret-right" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AccountOrders;
