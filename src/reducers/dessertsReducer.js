const dessertsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'FETCH_DESSERTS_INIT':
    case 'FETCH_DESSERTS_DONE':
      return payload;
    case 'ADD_DESSERT':
      // eslint-disable-next-line no-case-declarations
      const copy = { ...state };
      copy.desserts.unshift(payload);
      return copy;
    default:
      return state;
  }
};
export default dessertsReducer;
