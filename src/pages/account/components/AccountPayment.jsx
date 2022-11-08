import React from "react";
import { useTranslate } from "../../../core/Translate";
import { useRouteMatch, Link } from "react-router-dom";

function AccountPayment() {
  let { t } = useTranslate();
  const { url } = useRouteMatch();

  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        {/* Card */}
        <div className="card card-lg bg-light mb-8">
          <div className="card-body">
            {/* Heading */}
            <h6 className="mb-6">{t(`Debit / Credit Card`)}</h6>
            {/* Text */}
            <p className="mb-5">
              <strong>{t(`Card Number:`)}</strong> <br />
              <span className="text-muted">
                {t(`4242 ∙∙∙∙ ∙∙∙∙ 7856 (Mastercard)`)}
              </span>
            </p>
            {/* Text */}
            <p className="mb-5">
              <strong>{t("Expiry Date:")}</strong> <br />
              <span className="text-muted">{t("Feb 2022")}</span>
            </p>
            {/* Text */}
            <p className="mb-0">
              <strong>{t("Name on Card:")}</strong> <br />
              <span className="text-muted">{t("Daniel Robinson")}</span>
            </p>
            {/* Action */}
            <div className="card-action card-action-right">
              {/* Button */}
              <Link
                className="btn btn-xs btn-circle btn-white-primary"
                to={`${url}-method`}
              >
                <i className="fe fe-edit-2" />
              </Link>
              {/* Button */}
              <button className="btn btn-xs btn-circle btn-white-primary">
                <i className="fe fe-x" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        {/* Button */}
        <Link
          className="btn btn-block btn-lg btn-outline-border"
          to={`${url}-method`}
        >
          {t("Add Payment Method")} <i className="fe fe-plus" />
        </Link>
      </div>
    </div>
  );
}

export default AccountPayment;
