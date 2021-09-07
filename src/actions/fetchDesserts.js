import getDessertsJson from './getDessertsJson';

const fetchDesserts = (dispatch) => {
  dispatch({
    type: 'FETCH_DESSERTS_INIT',
    payload: {
      desserts: [],
      isLoading: true,
      hasLoaded: false,
    },
  });

  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => {
    dispatch({
      type: 'FETCH_DESSERTS_DONE',
      payload: {
        desserts: getDessertsJson(),
        isLoading: false,
        hasLoaded: true,
      },
    });
  });
};

export default fetchDesserts;
