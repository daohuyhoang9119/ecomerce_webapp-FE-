import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslate } from "../../../core/Translate";
import  useCountDown from "../../../core/useCountDown";

function CountDown() {
  let { t } = useTranslate();
  let {day, hour, minute, second} = useCountDown(123434);
  return (
    <section
      className="py-13 bg-cover"
      style={{ backgroundImage: "url(/img/covers/count-down-background-3.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-md-8 col-lg-6">
            {/* Heading */}
            <h3 className="mb-7">
              {t(`Get -50% from`)}
              <br />
              {t(`Summer Collection`)}
            </h3>
            {/* Counter */}
            <div
              className="d-flex mb-9"
              data-countdown
              data-date="Jan 5, 2021 15:37:25"
            >
              <div className="text-center">
                <div
                  className="font-size-h1 font-weight-bolder text-primary"
                  data-days
                >
                  {day.toString().padStart(2, 0)}
                </div>
                <div className="heading-xxs text-muted">{t(`Days`)}</div>
              </div>
              <div className="px-1 px-md-4">
                <div className="font-size-h2 font-weight-bolder text-primary">
                  :
                </div>
              </div>
              <div className="text-center">
                <div
                  className="font-size-h1 font-weight-bolder text-primary"
                  data-hours
                >
                  {hour.toString().padStart(2, 0)}
                </div>
                <div className="heading-xxs text-muted">{t(`Hours`)}</div>
              </div>
              <div className="px-1 px-md-4">
                <div className="font-size-h2 font-weight-bolder text-primary">
                  :
                </div>
              </div>
              <div className="text-center">
                <div
                  className="font-size-h1 font-weight-bolder text-primary"
                  data-minutes
                >
                  {minute.toString().padStart(2, 0)}
                </div>
                <div className="heading-xxs text-muted">{t(`Minutes`)}</div>
              </div>
              <div className="px-1 px-md-4">
                <div className="font-size-h2 font-weight-bolder text-primary">
                  :
                </div>
              </div>
              <div className="text-center">
                <div
                  className="font-size-h1 font-weight-bolder text-primary"
                  data-seconds
                >
                  {second.toString().padStart(2, 0)}
                </div>
                <div className="heading-xxs text-muted">{t(`Seconds`)}</div>
              </div>
            </div>
            {/* Button */}
            <NavLink className="btn btn-dark" to="/shop">
              {t(`Shop Now`)} <i className="fe fe-arrow-right ml-2" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountDown;
