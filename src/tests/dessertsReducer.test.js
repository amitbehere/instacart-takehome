// testReducer.test.js
import dessertsReducer from '../reducers/dessertsReducer';

describe('test for desserts reducer', () => {
  it('tests intial state', () => {
    const payloadObj = {
      deserts: [],
      isLoading: true,
      hasLoaded: false,
    };

    expect(
      dessertsReducer([], {
        type: 'FETCH_DESSERTS_INIT',
        payload: payloadObj,
      }),
    ).toEqual(payloadObj);
  });

  it('tests fetch desserts', () => {
    const payloadObj = {
      deserts: [{ name: 'dessert1' }, { name: 'dessert2' }],
      isLoading: false,
      hasLoaded: true,
    };

    expect(
      dessertsReducer([], {
        type: 'FETCH_DESSERTS_DONE',
        payload: payloadObj,
      }),
    ).toEqual(payloadObj);
  });

  it('tests adding a dessert', () => {
    const stateBeforeAdding = {
      desserts: [{ name: 'dessert1' }, { name: 'dessert2' }],
      isLoading: false,
      hasLoaded: true,
    };

    const newDessert = { name: 'dessert3' };

    const stateAfterAdding = {
      desserts: [{ name: 'dessert3' }, { name: 'dessert1' }, { name: 'dessert2' }],
      isLoading: false,
      hasLoaded: true,
    };

    expect(
      dessertsReducer(stateBeforeAdding, {
        type: 'ADD_DESSERT',
        payload: newDessert,
      }),
    ).toEqual(stateAfterAdding);
  });
});
