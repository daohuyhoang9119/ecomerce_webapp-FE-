function reduxToolkit({ initialState, reducers = {}, name }) {
  let action = {};
  let TYPE = {};

  for (let i in reducers) {
    //i:login, logout,update
    //name: auth
    /**type
     * auth/login
      auth/error
      auth/logout 
      auth/update
    */
    let type = `${name}/${i}`;

    action[i] = (data) => {
      return {
        type,
        payload: data,
      };
    };
    TYPE[i] = type;
  }

  function reducer(state = initialState, action) {
    let type = action.type.split("/")[1];
    let newState = { ...state };
    if (type in reducers) {
      return reducers[type](newState, action);
    }

    return state;
  }

  return {
    action,
    reducer,
    TYPE,
  };
}

export default reduxToolkit;
