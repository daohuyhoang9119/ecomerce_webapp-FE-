import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useTranslate } from "../core/Translate";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SEARCH } from "./../redux/type";
import useValidate from "./../core/useValidate";
import { categoryAction, fetchSearch } from "./../redux/action/productAction";

export default function ModalSearch() {
  let { t } = useTranslate();
  const [timeout, setTimeout] = useState();
  const { listSearch } = useSelector((state) => state.productReducer);

  let { categories } = useSelector((store) => store.productReducer);
  const dispatch = useDispatch();

  let { form, error, inputOnChange, check } = useValidate(
    {
      input: "",
    },
    {
      rule: {
        input: { required: true, min: 3 },
      },
      message: {
        input: {
          required: "Vui lòng nhập thông tin cần tìm kiếm",
          min: "Vui lòng nhập hơn 3 kí tự",
        },
      },
    }
  );

  useEffect(() => {
    dispatch(categoryAction());
  }, []);

  function _submitSearch() {
    let error = check();
    clearTimeout(timeout);
    if (Object.keys(error).length === 0) {
      let t = setTimeout(function () {
        dispatch(fetchSearch(form.input));
      }, 200);
      setTimeout(t);
    }
  }

  function _keyPressSubmitSearch(e) {
    if (e.which === 13) {
      _submitSearch();
    }
  }

  return ReactDOM.createPortal(
    <div
      className="modal fixed-right fade"
      id="modalSearch"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-vertical" role="document">
        <div className="modal-content">
          {/* Close */}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Header*/}
          <div className="modal-header line-height-fixed font-size-lg">
            <strong className="mx-auto">{t("Search Products")}</strong>
          </div>
          {/* Body: Form */}
          <div className="modal-body">
            {/* <ModalSearchInput onSubmit={handleSearch} /> */}
            <div className="modal-body">
              <div className="form-group">
                <label className="sr-only" htmlFor="modalSearchCategories">
                  {t("Categories")}:
                </label>
                <select className="custom-select" id="modalSearchCategories">
                  <option selected>{t("All Categories")}</option>
                  {
                    // categories.map(e => <option key={e._id} value={e._id}>{e.title}</option>)
                    categories.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.title}
                      </option>
                    ))
                  }
                </select>
              </div>
              <div className="input-group input-group-merge">
                <input
                  className="form-control"
                  type="search"
                  placeholder={t("Search")}
                  name="input"
                  value={form.input}
                  onKeyPress={_keyPressSubmitSearch}
                  onChange={inputOnChange}
                />

                <div className="input-group-append">
                  <button
                    className="btn btn-outline-border"
                    type="submit"
                    onClick={_submitSearch}
                  >
                    <i className="fe fe-search" />
                  </button>
                </div>
              </div>
              {error.input && <p className="text-error">{error.input}</p>}
            </div>
          </div>
          {/* Body: Results (add `.d-none` to disable it) */}
          <div className="modal-body border-top font-size-sm">
            {/* Heading */}
            <p>{t("Search Results:")}</p>
            {/* Items */}
            {listSearch.map((item) => (
              <SearchItem key={item._id} {...item} />
            ))}
            {/* Button */}
            <Link className="btn btn-link px-0 text-reset" to="/shop">
              View All <i className="fe fe-arrow-right ml-2" />
            </Link>
          </div>
          {/* Body: Empty (remove `.d-none` to disable it) */}
          <div className="d-none modal-body">
            {/* Text */}
            <p className="mb-3 font-size-sm text-center">
              {t("Nothing matches your search")}
            </p>
            <p className="mb-0 font-size-sm text-center">😞</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function SearchItem(state) {
  const { name, images, real_price, slug } = state;
  return (
    <div className="row align-items-center position-relative mb-5">
      <div className="col-4 col-md-3">
        {/* Image */}
        <img className="img-fluid" src={images?.[0]?.base_url} alt="..." />
      </div>
      <div className="col position-static">
        {/* Text */}
        <p className="mb-0 font-weight-bold">
          <Link className="stretched-link text-body" to={`shop/${slug}`}>
            {name}
          </Link>{" "}
          <br />
          <span className="text-muted">{real_price} vnd</span>
        </p>
      </div>
    </div>
  );
}
