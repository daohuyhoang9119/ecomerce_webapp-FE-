import React from "react";
import { useTranslate } from "../../core/Translate";

function Blog() {
  let { t } = useTranslate();

  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Heading */}
            <h3 className="mb-7 text-center">{t(`Our Blog`)}</h3>
            {/* Nav */}
            <nav className="nav justify-content-center mb-10">
              <a className="nav-link active" href="#">
                {t(`All`)}
              </a>
              <a className="nav-link" href="#">
                {t(`Company`)}
              </a>
              <a className="nav-link" href="#">
                {t(`Brand`)}
              </a>
              <a className="nav-link" href="#">
                {t(`Fashion`)}
              </a>
              <a className="nav-link" href="#">
                {t(`Shop`)}
              </a>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card mb-7">
              {/* Badge */}
              <div className="badge badge-white card-badge">
                <time className="text-uppercase" dateTime="2019-06-20">
                  {t(`Jun 20`)}
                </time>
              </div>
              {/* Image */}
              <img
                className="card-img-top"
                src="/img/blog/blog-1.jpg"
                alt="..."
              />
              {/* Body */}
              <div className="card-body px-0">
                {/* Heading */}
                <h5>{t(`So isn't land signs greater void face replenish.`)}</h5>
                {/* Text */}
                <p className="mb-0 text-gray-500">
                  {t(`Midst one brought greater also morning green saying had good.
                  Open stars day let over gathered, grass face one every light
                  of under.`)}
                </p>
                {/* Button */}
                <a
                  className="btn btn-link stretched-link px-0 text-reset"
                  href="blog-post.html"
                >
                  {t(`Read More `)}
                  <i className="fe fe-arrow-right ml-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card mb-7">
              {/* Badge */}
              <div className="badge badge-white card-badge">
                <time className="text-uppercase" dateTime="2019-06-20">
                  {t(`Jun 20`)}
                </time>
              </div>
              {/* Image */}
              <img
                className="card-img-top"
                src="/img/blog/blog-4.jpg"
                alt="..."
              />
              {/* Body */}
              <div className="card-body px-0">
                {/* Heading */}
                <h5>{t(`Sea good every which said first divided.`)}</h5>
                {/* Text */}
                <p className="mb-0 text-gray-500">
                  {t(`From fruit shall stars over. Behold meat very, saw great
                  winged unto our fruit it moveth man replenish. Meat place is
                  so fruit.`)}
                </p>
                {/* Button */}
                <a
                  className="btn btn-link stretched-link px-0 text-reset"
                  href="blog-post.html"
                >
                  {t(`Read More `)}
                  <i className="fe fe-arrow-right ml-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card mb-7">
              {/* Badge */}
              <div className="badge badge-white card-badge">
                <time className="text-uppercase" dateTime="2019-06-20">
                  {t(`Jun 20`)}
                </time>
              </div>
              {/* Image */}
              <img
                className="card-img-top"
                src="/img/blog/blog-5.jpg"
                alt="..."
              />
              {/* Body */}
              <div className="card-body px-0">
                {/* Heading */}
                <h5>{t(`Morning let you created every day.`)}</h5>
                {/* Text */}
                <p className="mb-0 text-gray-500">
                  {t(`Created spirit fly was fifth. Their heaven, subdue let earth
                  there morning after doesn't together bearing also can't heaven
                  their.`)}
                </p>
                {/* Button */}
                <a
                  className="btn btn-link stretched-link px-0 text-reset"
                  href="blog-post.html"
                >
                  {t(`Read More `)}
                  <i className="fe fe-arrow-right ml-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card mb-7">
              {/* Badge */}
              <div className="badge badge-white card-badge">
                <time className="text-uppercase" dateTime="2019-06-20">
                  {t(`Jun 20`)}
                </time>
              </div>
              {/* Image */}
              <img
                className="card-img-top"
                src="/img/blog/blog-6.jpg"
                alt="..."
              />
              {/* Body */}
              <div className="card-body px-0">
                {/* Heading */}
                <h5>{t(`Third darkness and second dry second greater.`)}</h5>
                {/* Text */}
                <p className="mb-0 text-gray-500">
                  {t(`Let meat subdue the first for fourth is. Them our meat isn't
                  you'll, you're place Years dominion shall from years a hath
                  Good appear yielding.`)}
                </p>
                {/* Button */}
                <a
                  className="btn btn-link stretched-link px-0 text-reset"
                  href="blog-post.html"
                >
                  {t(`Read More `)}
                  <i className="fe fe-arrow-right ml-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card mb-7">
              {/* Badge */}
              <div className="badge badge-white card-badge">
                <time className="text-uppercase" dateTime="2019-06-20">
                  {t(`Jun 20`)}
                </time>
              </div>
              {/* Image */}
              <img
                className="card-img-top"
                src="/img/blog/blog-7.jpg"
                alt="..."
              />
              {/* Body */}
              <div className="card-body px-0">
                {/* Heading */}
                <h5>{t(`Heaven upon heaven moveth every have.`)}</h5>
                {/* Text */}
                <p className="mb-0 text-gray-500">
                  {t(`Divide own, there tree forth whales you, fill creepeth our.
                  You're itself may yielding green was fly one kind fish hath be
                  be winged.`)}
                </p>
                {/* Button */}
                <a
                  className="btn btn-link stretched-link px-0 text-reset"
                  href="blog-post.html"
                >
                  {t(`Read More `)}
                  <i className="fe fe-arrow-right ml-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card mb-7">
              {/* Badge */}
              <div className="badge badge-white card-badge">
                <time className="text-uppercase" dateTime="2019-06-20">
                  {t(`Jun 20`)}
                </time>
              </div>
              {/* Image */}
              <img
                className="card-img-top"
                src="/img/blog/blog-8.jpg"
                alt="..."
              />
              {/* Body */}
              <div className="card-body px-0">
                {/* Heading */}
                <h5>{t(`Created their subdue together.`)}</h5>
                {/* Text */}
                <p className="mb-0 text-gray-500">
                  {t(`Stars female night fowl our second in great can't after he sea
                  thing so a said two. Fowl may open first.`)}
                </p>
                {/* Button */}
                <a
                  className="btn btn-link stretched-link px-0 text-reset"
                  href="blog-post.html"
                >
                  {t(`Read More `)}
                  <i className="fe fe-arrow-right ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Progress */}
            <div className="row justify-content-center mt-7">
              <div className="col-12 text-center">
                {/* Caption */}
                <p className="font-size-sm text-muted">
                  {t(`Showing 16 of 24 products`)}
                </p>
                {/* Progress */}
                <div
                  className="progress mx-auto mb-7"
                  style={{ maxWidth: "250px" }}
                >
                  <div
                    className="progress-bar bg-dark"
                    role="progressbar"
                    style={{ width: "66%" }}
                    aria-valuenow={66}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                {/* Button */}
                <button className="btn btn-sm btn-outline-dark">
                  {t(`Load more`)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
