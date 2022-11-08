import React from "react";
import { Link,useRouteMatch } from "react-router-dom"

import { useTranslate } from "../../../core/Translate";

function AccountAddress() {
  let { t } = useTranslate();
  const { url } = useRouteMatch();

  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        {/* Card */}
        <div className="card card-lg bg-light mb-8">
          <div className="card-body">
            {/* Heading */}
            <h6 className="mb-6">{t(`Shipping Address`)}</h6>
            {/* Text */}
            <p className="text-muted mb-0">
              Daniel Robinson <br />
              3997 Raccoon Run <br />
              Kingston <br />
              45644 <br />
              {t(`United States `)}
              <br />
              6146389574
            </p>
            {/* Action */}
            <div className="card-action card-action-right">
              {/* Button */}
              <Link
                className="btn btn-xs btn-circle btn-white-primary"
                to={`${url}-edit`}
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
      <div className="col-12 col-lg-6">
        {/* Card */}
        <div className="card card-lg bg-light mb-8">
          <div className="card-body">
            {/* Heading */}
            <h6 className="mb-6">{t(`Billing Address`)}</h6>
            {/* Text */}
            <p className="text-muted mb-0">
              Daniel Robinson <br />
              3997 Raccoon Run <br />
              Kingston <br />
              45644 <br />
              {t(`United States`)} <br />
              6146389574
            </p>
            {/* Action */}
            <div className="card-action card-action-right">
              {/* Button */}
              <Link
                className="btn btn-xs btn-circle btn-white-primary"
                to={`${url}-edit`}
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
          to={`${url}-edit`}
        >
          {t(`Add Address`)} <i className="fe fe-plus" />
        </Link>
      </div>
    </div>
  );
}

export default AccountAddress;
