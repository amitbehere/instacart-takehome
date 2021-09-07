const modalReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'SHOW_MODAL':
    case 'HIDE_MODAL':
      return payload;
    default:
      return state;
  }
};
export default modalReducer;
