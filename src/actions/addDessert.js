const addDessert = (dessert) => (dispatch) => {
  dispatch({
    type: 'ADD_DESSERT',
    payload: dessert,
  });
};

export default addDessert;
