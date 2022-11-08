import React, { useState, useContext } from "react";

let initialState = {
  default: localStorage.getItem("language") || "en",

  // vn: {
  //   Hello: "Xin chào",
  // },
  // china: {
  //   Hello: "Xin chào",
  // },
};

let Context = React.createContext(initialState);
////////
export default function TranslateProvider({ children, translate }) {
  //children la cac page

  let [state, setState] = useState({ ...initialState, ...translate });

  function t(key) {
    return state?.[state.default]?.[key] || key;
  }

  function selectLanguage(language) {
    localStorage.setItem("language", language);
    setState({
      ...state,
      default: language,
    });
  }

  return (
    <Context.Provider value={{ t, selectLanguage, language: state.default }}>
      {children}
    </Context.Provider>
  );
}

export function useTranslate() {
  let { t, selectLanguage, language } = useContext(Context);

  return {
    t,
    selectLanguage,
    language,
  };
}
