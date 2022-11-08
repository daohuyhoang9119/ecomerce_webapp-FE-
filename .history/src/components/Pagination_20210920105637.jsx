import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { convertQueryToObj } from "../utils";
import { convertObjToQuery } from "./../utils/index";

export default function Pagination({ currentPage, totalPage }) {
  let { url } = useRouteMatch();

  function render() {
    if (totalPage === 1) return [];

    let start = currentPage - 2;
    if (start < 1) {
      start = 1;
    }

    let end = currentPage + 2;
    if (end > totalPage) {
      end = totalPage;
    }

    let arr = [];
    for (let i = start; i <= end; i++) {
      let objUrl = convertQueryToObj();
      let queryString = convertObjToQuery(objUrl);

      arr.push(
        <li
          className={`page-item ${currentPage === i ? "active" : ""}`}
          key={i}
        >
          <Link
            className="page-link"
            to={`${url}?${convertObjToQuery({
              ...convertQueryToObj(),
              page: i,
            })}`}
          >
            {i}
          </Link>
        </li>
      );
    }
    return arr;
  }

  return (
    <nav className="d-flex justify-content-center justify-content-md-end">
      <ul className="pagination pagination-sm text-gray-400">
        {currentPage > 1 && (
          <li className="page-item">
            <Link
              className="page-link page-link-arrow"
              to={`${url}?${convertObjToQuery({
                ...convertQueryToObj(),
                page: currentPage - 1,
              })}`}
            >
              <i className="fa fa-caret-left" />
            </Link>
          </li>
        )}
        {render()}
        {currentPage < totalPage && (
          <li className="page-item">
            <Link
              className="page-link page-link-arrow"
              to={`${url}?${convertObjToQuery({
                ...convertQueryToObj(),
                page: currentPage + 1,
              })}`}
            >
              <i className="fa fa-caret-right" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
