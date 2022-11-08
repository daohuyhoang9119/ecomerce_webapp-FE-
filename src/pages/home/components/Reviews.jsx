import React,{useRef, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useTranslate } from "../../../core/Translate";

let $ = window.$;
function Reviews() {
  let { t } = useTranslate();
  //slider
  let ref = useRef();
	
	useEffect(() => {
		$(ref.current).flickity({
			pageDots: true,
		});
	}, []);

  return (
    <section className="py-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
            {/* Preheading */}
            <h6 className="heading-xxs mb-3 text-gray-400">
              {t(`What buyers say`)}
            </h6>
            {/* Heading */}
            <h2 className="mb-10">
              {t(`What buyers sayLatest buyers Reviews`)}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Slider */}
            <div ref={ref} data-flickity='{"pageDots": true}'>
              <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                {/* Card */}
                <div className="card-lg card border">
                  <div className="card-body">
                    {/* Header */}
                    <div className="row align-items-center mb-6">
                      <div className="col-4">
                        {/* Image */}
                        <img
                          src="/img/products/product-13.jpg"
                          alt="..."
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-8 ml-n2">
                        {/* Preheading */}
                        <NavLink className="font-size-xs text-muted" to="/shop">
                          {t(`Shoes`)}
                        </NavLink>
                        {/* Heading */}
                        <NavLink
                          className="d-block font-weight-bold text-body"
                          to="/product"
                        >
                          {t(`Low top Sneakers`)}
                        </NavLink>
                        {/* Rating */}
                        <div
                          className="rating font-size-xxs text-warning"
                          data-value={3}
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
                      </div>
                    </div>
                    {/* Blockquote */}
                    <blockquote className="mb-0">
                      <p className="text-muted">
                        {t(`From creepeth said moved given divide make multiply of
                        him shall itself also above second doesn't unto created
                        saying land herb sea midst night wherein.`)}
                      </p>
                      <footer className="font-size-xs text-muted">
                        {t(`Logan Edwards`)},{" "}
                        <time dateTime="2019-06-01">01 Jun 2019</time>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                {/* Card */}
                <div className="card-lg card border">
                  <div className="card-body">
                    {/* Header */}
                    <div className="row align-items-center mb-6">
                      <div className="col-4">
                        {/* Image */}
                        <img
                          src="/img/products/product-14.jpg"
                          alt="..."
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-8 ml-n2">
                        {/* Preheading */}
                        <NavLink className="font-size-xs text-muted" to="/shop">
                          {t(`Dresses`)}
                        </NavLink>
                        {/* Heading */}
                        <NavLink
                          className="d-block font-weight-bold text-body"
                          to="/product"
                        >
                          {t(`Cotton print Dress`)}
                        </NavLink>
                        {/* Rating */}
                        <div
                          className="rating font-size-xxs text-warning"
                          data-value={5}
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
                      </div>
                    </div>
                    {/* Blockquote */}
                    <blockquote className="mb-0">
                      <p className="text-muted">
                        {t(`God every fill great replenish darkness unto. Very open.
                        Likeness their that light. Given under image to. Subdue
                        of shall cattle day fish form saw spirit and given
                        stars, us you whales may, land, saw fill unto.`)}
                      </p>
                      <footer className="font-size-xs text-muted">
                        {t(`Jane Jefferson`)},{" "}
                        <time dateTime="2019-05-29">29 May 2019</time>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                {/* Card */}
                <div className="card-lg card border">
                  <div className="card-body">
                    {/* Header */}
                    <div className="row align-items-center mb-6">
                      <div className="col-4">
                        {/* Image */}
                        <img
                          src="/img/products/product-15.jpg"
                          alt="..."
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-8 ml-n2">
                        {/* Preheading */}
                        <NavLink className="font-size-xs text-muted" to="/shop">
                          {t(`T-shirts`)}
                        </NavLink>
                        {/* Heading */}
                        <NavLink
                          className="d-block font-weight-bold text-body"
                          to="/product"
                        >
                          {t(`Oversized print T-shirt`)}
                        </NavLink>
                        {/* Rating */}
                        <div
                          className="rating font-size-xxs text-warning"
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
                      </div>
                    </div>
                    {/* Blockquote */}
                    <blockquote className="mb-0">
                      <p className="text-muted">
                        {t(`Fill his waters wherein signs likeness waters. Second
                        light gathered appear sixth fourth, seasons behold
                        creeping female.`)}
                      </p>
                      <footer className="font-size-xs text-muted">
                        {t(`Darrell Baker`)},{" "}
                        <time dateTime="2019-05-18">{t(`18 May 2019`)}</time>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                {/* Card */}
                <div className="card-lg card border">
                  <div className="card-body">
                    {/* Header */}
                    <div className="row align-items-center mb-6">
                      <div className="col-4">
                        {/* Image */}
                        <img
                          src="/img/products/product-10.jpg"
                          alt="..."
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-8 ml-n2">
                        {/* Preheading */}
                        <NavLink className="font-size-xs text-muted" to="/shop">
                          {t(`Bags`)} &amp; {t(`Accessories`)}
                        </NavLink>
                        {/* Heading */}
                        <NavLink
                          className="d-block font-weight-bold text-body"
                          to="/product"
                        >
                          {t(`Suede cross body Bag`)}
                        </NavLink>
                        {/* Rating */}
                        <div
                          className="rating font-size-xxs text-warning"
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
                      </div>
                    </div>
                    {/* Blockquote */}
                    <blockquote className="mb-0">
                      <p className="text-muted">
                        {t(`God every fill great replenish darkness unto. Very open.
                        Likeness their that light. Given under image to. Subdue
                        of shall cattle day fish form saw spirit and given
                        stars.`)}
                      </p>
                      <footer className="font-size-xs text-muted">
                        {t(`Pavel Doe`)},{" "}
                        <time dateTime="2019-05-29">{t(`29 May 2019`)}</time>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
