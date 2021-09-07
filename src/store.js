import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dessertsReducer from './reducers/dessertsReducer';
import modalReducer from './reducers/modalReducer';

const middleware = [thunk];

export const reducer = combineReducers({
  dessertsState: dessertsReducer,
  shouldShowModal: modalReducer,
});

const initialState = {
  dessertsState: {
    desserts: [],
    isLoading: false,
    hasLoaded: false,
  },
  shouldShowModal: false,

};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
