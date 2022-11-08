import React from "react";
import { useTranslate } from "../../core/Translate";
import {Link} from "react-router-dom";

function About() {
  let { t } = useTranslate();
  return (
    <div>
      {/* WELCOME */}
      <section>
        <div className="container">
          <div
            className="row justify-content-center py-14 bg-cover"
            style={{ backgroundImage: "url(/img/covers/cover-21.jpg)" }}
          >
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              {/* Heading */}
              <h1 className="mb-0 text-center text-white">
                {t(`We believe we can all make a stylish.`)}
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* OUR STORY */}
      <section className="py-12">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6">
              {/* Image */}
              <img
                src="/img/products/product-62.jpg"
                alt="..."
                className="img-fluid w-50"
              />
              {/* Image */}
              <div className="text-right mt-n13 mt-lg-n15 mb-10 mb-md-0">
                <img
                  src="/img/products/product-63.jpg"
                  alt="..."
                  className="img-fluid w-75"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              {/* Preheading */}
              <h6 className="heading-xxs mb-3 text-gray-400">
                {t(`Our story`)}
              </h6>
              {/* Heading */}
              <h2 className="mb-7">{t(`About our Store`)}</h2>
              {/* Text */}
              <p className="font-size-lg text-muted">
                {t(`Open created shall two he second moving whose. He face whose two
                upon, fowl behold waters. Fly there their day creepeth. Darkness
                beginning spirit after. Creepeth subdue. Brought may, first.
                Under living that.`)}
              </p>
              <p className="mb-0 font-size-lg text-muted">
                {t(`Third. For morning whales saw were had seed can't divide it
                light shall moveth, us blessed given wherein.`)}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <section className="py-12 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading */}
              <h2 className="mb-10">{t(`Fashion Democracy`)}</h2>
            </div>
          </div>
          <div className="row justify-content-center mb-9 font-size-lg text-gray-500">
            <div className="col-12 col-md-5">
              <p>
                {t(`And whales be, earth thing seed whales, forth beginning made may
                beginning sea great void likeness open beast firmament very
                living cattle divided fruitful may. Sea created saw fifth so
                thing signs meat.`)}
              </p>
              <p className="mb-md-0">
                {t(`Green fruit meat stars, creepeth second he meat. Appear is
                fruitful given Winged. Gathered second so us saying blessed, he.`)}
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 font-size-lg text-gray-500">
              <p>
                {t(`Male was. Itself. Have isn't first divide and i day, moving
                she'd appear open dominion sea him days multiply our, make
                firmament rule there made set midst creeping let won't morning
                their great fish.`)}
              </p>
              <p className="mb-0">
                {t(`Unto over unto together first shall greater yielding made
                dominion fill. First waters bring made blessed likeness bring
                forth had. Creature one.`)}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              {/* Button */}
              <Link className="btn btn-dark" to="/shop">
                {t(`Shop Now`)} <i className="fe fe-arrow-right ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* OUR STORY */}
      <section className="py-12">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 order-md-2 text-right">
              {/* Image */}
              <img
                src="/img/products/product-36.jpg"
                alt="..."
                className="img-fluid w-50"
              />
              {/* Image */}
              <div className="text-left mt-n13 mt-lg-n15 mb-10 mb-md-0">
                <img
                  src="/img/products/product-37.jpg"
                  alt="..."
                  className="img-fluid w-75"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 order-md-1">
              {/* Preheading */}
              <h6 className="heading-xxs mb-3 text-gray-400">
                {t(`Who we are`)}
              </h6>
              {/* Heading */}
              <h2 className="mb-7">{t(`Our story`)}</h2>
              {/* Text */}
              <p className="font-size-lg text-muted">
                {t(`Behold divided hath without. Place dominion. Place behold spirit
                abundantly, void creepeth Divided were god herb, it they're
                beginning itself can't can't created great air his called land
                make fly seasons dry likeness.`)}
              </p>
              <p className="mb-0 font-size-lg text-muted">
                {t(`Fish upon you you'll midst waters. Divided had life years to own
                gathering replenish seasons Great meat. Cattle earth were signs
                winged so image together also.`)}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SLOGAN */}
      <section>
        <div className="container">
          <div className="row justify-content-center py-12 bg-primary bg-pattern">
            <div className="col-12 col-lg-10 col-xl-8">
              {/* Text */}
              <p className="font-size-h5 line-height-base text-center text-white">
                {t(`Together won't divided fourth let grass above forth. Creature
                midst let cattle place tree. Gathered whose land form fruitful
                under bring creeping in upon void man unto divided itself
                gathered.`)}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* IMAGES */}
      <section className="pt-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-5">
              {/* Image */}
              <img
                className="img-fluid mb-7"
                src="/img/products/product-116.jpg"
                alt="..."
              />
              {/* Image */}
              <img
                className="img-fluid mb-7 mb-md-0"
                src="/img/products/product-117.jpg"
                alt="..."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              {/* Image */}
              <img
                className="img-fluid mb-7 mt-md-12"
                src="/img/products/product-118.jpg"
                alt="..."
              />
              {/* Image */}
              <img
                className="img-fluid mb-7 mb-md-0"
                src="/img/products/product-119.jpg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
      {/* REVIEWS */}
      <section className="pt-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Preheading */}
              <h6 className="heading-xxs mb-3 text-gray-400">
                {t(`What buyers say`)}
              </h6>
              {/* Heading */}
              <h2 className="mb-10">{t(`Customers Reviews`)}</h2>
              {/* Slider */}
              <div
                className="flickity-buttons-lg flickity-buttons-offset px-lg-12"
                data-flickity='{"prevNextButtons": true, "pageDots": true}'
              >
                {/* Item */}
                <blockquote className="blockquote col-12">
                  <p className="mb-6">
                    {t(`Given wherein. Doesn't called also and air sea to make first
                    subdue beginning. Appear seasons the it after whose
                    beginning. Hath can't good life. They're multiply made give
                    divided open, be likeness Cattle be have. Life tree
                    darkness. She'd very.`)}
                  </p>
                  <footer className="blockquote-footer">
                    {t(`Darrell Baker`)},{" "}
                    <time dateTime="2019-05-18">18 May 2019</time>
                  </footer>
                </blockquote>
                {/* Item */}
                <blockquote className="blockquote col-12">
                  <p className="mb-6">
                    {t(`Given wherein. Doesn't called also and air sea to make first
                    subdue beginning. Appear seasons the it after whose
                    beginning. Hath can't good life. They're multiply made give
                    divided open, be likeness Cattle be have. Life tree
                    darkness. She'd very.`)}
                  </p>
                  <footer className="blockquote-footer">
                    {t(`Darrell Baker`)},{" "}
                    <time dateTime="2019-05-18">18 May 2019</time>
                  </footer>
                </blockquote>
                {/* Item */}
                <blockquote className="blockquote col-12">
                  <p className="mb-6">
                    {t(`Given wherein. Doesn't called also and air sea to make first
                    subdue beginning. Appear seasons the it after whose
                    beginning. Hath can't good life. They're multiply made give
                    divided open, be likeness Cattle be have. Life tree
                    darkness. She'd very.`)}
                  </p>
                  <footer className="blockquote-footer">
                    {t(`Darrell Baker`)},{" "}
                    <time dateTime="2019-05-18">18 May 2019</time>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SOCIAL */}
      <section className="pt-12">
        <div
          className="container bg-h-100"
          style={{ backgroundImage: "url(/img/covers/cover-15.jpg)" }}
        >
          <div className="row">
            <div className="col-12 py-13 text-center">
              {/* Button */}
              <Link to="/" className="btn btn-white px-8">
                @shopper
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES */}
      <section className="py-9">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              {/* Item */}
              <div className="d-flex mb-6 mb-lg-0">
                {/* Icon */}
                <i className="fe fe-truck font-size-lg text-primary" />
                {/* Body */}
                <div className="ml-6">
                  {/* Heading */}
                  <h6 className="heading-xxs mb-1">{t(`Free shipping`)}</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm text-muted">
                    {t(`From all orders over $100`)}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Item */}
              <div className="d-flex mb-6 mb-lg-0">
                {/* Icon */}
                <i className="fe fe-repeat font-size-lg text-primary" />
                {/* Body */}
                <div className="ml-6">
                  {/* Heading */}
                  <h6 className="mb-1 heading-xxs">{t(`Free returns`)}</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm text-muted">
                    {t(`Return money within 30 days`)}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Item */}
              <div className="d-flex mb-6 mb-md-0">
                {/* Icon */}
                <i className="fe fe-lock font-size-lg text-primary" />
                {/* Body */}
                <div className="ml-6">
                  {/* Heading */}
                  <h6 className="mb-1 heading-xxs">{t(`Secure shopping`)}</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm text-muted">
                    {t(`You're in safe hands`)}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Item */}
              <div className="d-flex">
                {/* Icon */}
                <i className="fe fe-tag font-size-lg text-primary" />
                {/* Body */}
                <div className="ml-6">
                  {/* Heading */}
                  <h6 className="mb-1 heading-xxs">
                    {t(`Over 10,000 Styles`)}
                  </h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm text-muted">
                    {t(`We have everything you need`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
