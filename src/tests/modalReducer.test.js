import modalReducer from '../reducers/modalReducer';

describe('test for modal reducer', () => {
  it('tests show modal', () => {
    expect(
      modalReducer([], {
        type: 'SHOW_MODAL',
        payload: true,
      }),
    ).toEqual(true);
  });
  it('tests hide modal', () => {
    expect(
      modalReducer([], {
        type: 'HIDE_MODAL',
        payload: false,
      }),
    ).toEqual(false);
  });

  it('tests original state', () => {
    expect(
      modalReducer([], {
        type: 'UNKOWN',
        payload: false,
      }),
    ).toEqual([]);
  });
});
