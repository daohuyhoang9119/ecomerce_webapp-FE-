import React, { useState } from "react";

let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
let phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i;
let websitePattern =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i;
let facebookPattern =
  /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/i;

export function useForm(initForm, validate) {
  const [form, setForm] = useState(initForm);
  const [error, setError] = useState({});

  function check() {
    let errorObj = {};
    let { rule, message } = validate;

    if (!message) {
      message = {};
    }


    for (let i in rule) {
      let r = rule[i];
      let m = message[i] || {};

      if (r.require && !form[i]?.trim()) {
        errorObj[i] = m?.require || "Trường này là bắt buộc";
        continue;
      }
      

      if (r.pattern && form[i]) {
        let { pattern } = r;
        if (pattern === "email") pattern = emailPattern;
        if (pattern === "phone") pattern = phonePattern;
        if (pattern === "website") pattern = websitePattern;
       
        if (pattern === "urlFacebook") pattern = facebookPattern;
        if (!pattern?.test(form[i])) {
          errorObj[i] = m?.pattern || "Trường này không đúng định dạng";
        }
      }

      if (r.min) {
        if (form[i].length < r.min && form[i].length > 1) {
          errorObj[i] = m?.min || `Trường này không được ít hơn ${r.min} ký tự`;
        }
       
      }
      if (r.max) {
        if (form[i].length > r.max) {
          errorObj[i] =
            m?.max || `Trường này không được nhiều hơn ${r.max} ký tự`;
        }
      }
    }
    setError(errorObj);
    return errorObj;
  }

  function inputOnChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    // setForm({
    //   ...form,
    //   [name]:value
    // })
    form[name] = value;
  }


  //use hook form

  function register(name, rule) {
    if (rule) {
      if (!validate.rule) {
        validate.rule = {};
      }
      validate.rule[name] = rule;
    }


    return {
      name:name,
      onChange: inputOnChange,
      defaultValue : form[name],
    };
  }

  //return a callback function in pageform to put it into a submit function in it
  function handleSubmit(callback) {
    return (e) => {
      e.preventDefault();
      let errObj = check();
      if (Object.keys(errObj).length === 0) {
        callback(form);
        // console.log(form);
        // console.log('van chay dc')
      }
    };
  }

  //   return { form, error, inputOnChange, check };
  return { register, handleSubmit, error, check, form, inputOnChange };
}
