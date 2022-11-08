import React from "react";
// import useValidate from "../../../core/useValidate";

import { useTranslate } from "../../../core/Translate";
import { useDispatch, useSelector } from "react-redux";

import { useForm, ErrorMessage } from '../../../core/useform';
import { registerAction, fetchRegister } from './../../../redux/action/authAction';

function Register() {
  let { t } = useTranslate();
  let dispatch = useDispatch();
  let {regisSuccess, regisError} = useSelector(state => state.authReducer);
  //form
  const { register, handleSubmit, error,form } = useForm(
    {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      confirm_password: "",
    },
    {
      // rule: {
      //   first_name: {
      //     require: true,
      //   },
      //   last_name: {
      //     require: true,
      //   },
      //   username: {
      //     require: true,
      //     pattern: "email",
      //   },
      //   password: {
      //     require: true,
      //     min: 6,
      //     max: 32,
      //   },
      //   confirm_password: {
      //     require: true,
      //     match: "password",
      //   },
      // },
      message: {
        first_name: {
          require: "Trường này không được để trống ",
        },
        last_name: {
          require: "Trường này không được để trống ",
        },
        username: {
          require: "Email không được để trống ",
          pattern: "Email không đúng định dạng",
        },
        password: {
          require: "Password không được để trống",
          pattern:
            "Password phải hơn 8 ký tự, ít nhất 1 số, ít nhất 1 ký tự đặc biệt",
        },
        confirm_password: {
          require: "Password không được để trống",
          match: "Vui lòng điền giống password",
        },
      },
    }
  );




  // function onRegister(e) {
  //   e.preventDefault();
  //   let errObj = check();
  //   if (Object.keys(errObj).length === 0) {
  //     // let res = await Auth.login({
  //     //   username: form.username,
  //     //   password: form.password,
  //     // });
  //     console.log(form);
  //   }
  // }
  function formRegisterSubmitSuccess(form){
    // dispatch(registerAction(form))
    dispatch(fetchRegister(form))
  }

  return (
    <>
      <div className="col-12 col-md-6">
        {/* Card */}
        <div className="card card-lg">
          <div className="card-body">
            {/* Heading */}
            <h6 className="mb-7">{t(`New Customer`)}</h6>
            {/* Form */}
            <form onSubmit={handleSubmit(formRegisterSubmitSuccess)}>
              {
                regisError && (
                  <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                    {regisError}
                  </p>
                )
              }
              {
                regisSuccess && (
                  <p style={{marginBottom: 15, color: "#00ff00", fontSize:16, fontWeight: "bold"}}>
                    {regisSuccess}
                  </p>
                )
              }
              <div className="row">
                <div className="col-12">
                  {/* Email */}
                  <div className="form-group">
                    <label className="sr-only" htmlFor="registerFirstName">
                      {t(`First Name *`)}
                    </label>
                    <input
                      className="form-control form-control-sm"
                      id="registerFirstName"
                      // type="text"
                      placeholder="First Name *"
                      // required
                      // value={form.first_name}
                      // name="first_name"
                      // onChange={inputOnChange}
                      {...register("first_name",{require:true})}
                    />
                    <ErrorMessage error={error.first_name}/>
                    {/* {error.first_name && (
                      <p className="error-text-login">{error.first_name}</p>
                    )} */}
                  </div>
                </div>
                <div className="col-12">
                  {/* Email */}
                  <div className="form-group">
                    <label className="sr-only" htmlFor="registerLastName">
                      {t(`Last Name *`)}
                    </label>
                    <input
                      className="form-control form-control-sm"
                      id="registerLastName"
                      // type="text"
                      placeholder="Last Name *"
                      // required
                      // value={form.last_name}
                      // name="last_name"
                      // onChange={inputOnChange}
                      {...register("last_name",{require:true})}
                    />
                    <ErrorMessage error={error.last_name}/>
                    {/* {error.last_name && (
                      <p className="error-text-login">{error.last_name}</p>
                    )} */}
                  </div>
                </div>
                <div className="col-12">
                  {/* Email */}
                  <div className="form-group">
                    <label className="sr-only" htmlFor="registerEmail">
                      {t(`Email Address *`)}
                    </label>
                    <input
                      className="form-control form-control-sm"
                      id="registerEmail"
                      // type="email"
                      placeholder="Email Address *"
                      // required
                      // value={form.username}
                      // name="username"
                      // onChange={inputOnChange}
                      {...register("username",{require:true, pattern:'email'})}
                    />
                    <ErrorMessage error={error.username}/>
                    {/* {error.username && (
                      <p className="error-text-login">{error.username}</p>
                    )} */}
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  {/* Password */}
                  <div className="form-group">
                    <label className="sr-only" htmlFor="registerPassword">
                      {t(`Password *`)}
                    </label>
                    <input
                      className="form-control form-control-sm"
                      id="registerPassword"
                      type="password"
                      placeholder="Password *"
                      // required
                      // value={form.password}
                      // name="password"
                      // onChange={inputOnChange}
                      {...register("password",{require:true,min: 6,
                        max: 32,})}
                    />
                    <ErrorMessage error={error.password}/>
                    {/* {error.password && (
                      <p className="error-text-login">{error.password}</p>
                    )} */}
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  {/* Password */}
                  <div className="form-group">
                    <label
                      className="sr-only"
                      htmlFor="registerPasswordConfirm"
                    >
                      {t(`Confirm Password *`)}
                    </label>
                    <input
                      className="form-control form-control-sm"
                      id="registerPasswordConfirm"
                      type="password"
                      placeholder="Confirm Password *"
                      // required
                      // value={form.confirm_password}
                      // name="confirm_password"
                      // onChange={inputOnChange}
                      {...register("confirm_password",{require:true,min: 6,
                        max: 32,})}
                    />
                    {error?.confirm_password !== form.password && (
                      <ErrorMessage error={error.confirm_password}/>
                      // <p className="error-text-login">
                      //   {error.confirm_password}
                      // </p>
                    )}
                  </div>
                </div>
                <div className="col-12 col-md-auto">
                  {/* Link */}
                  <div className="form-group font-size-sm text-muted">
                    {t(`By registering your details, you agree with our Terms &amp;
                    Conditions, and Privacy and Cookie Policy.`)}
                  </div>
                </div>
                <div className="col-12 col-md">
                  {/* Newsletter */}
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="registerNewsletter"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="registerNewsletter"
                      >
                        {t(`Sign me up for the Newsletter!`)}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  {/* Button */}
                  <button
                    className="btn btn-sm btn-dark"
                    type="submit"
                  >
                    {t(`Register`)}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
