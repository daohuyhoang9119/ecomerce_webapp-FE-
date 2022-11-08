import React from "react";
import { useTranslate } from "../../../core/Translate";
import {useSelector} from "react-redux";

import AccountWishlistItem from './AccountWishListItem';

function AccountWishlist() {
  let { t } = useTranslate();

  const { wishList } = useSelector(state => state.productReducer); 
  return (
    <>
      {/* Products */}
      <div className="row">
        {/* Item */}
        {
          wishList.map((e) => (
            <AccountWishlistItem key={e._id} {...e} />
          ))
        }

      </div>
      {/* Pagination 
      <nav className="d-flex justify-content-center justify-content-md-end">
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
      </nav> */}
    </>
  );
}

export default AccountWishlist;
