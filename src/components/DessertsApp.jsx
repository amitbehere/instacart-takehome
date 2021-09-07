import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchDessertsAction from '../actions/fetchDesserts';
import addDessertAction from '../actions/addDessert';
import {
  showModal as showModalAction,
  hideModal as hideModalAction,
} from '../actions/showHideModal';
import FetchButton from './FetchButton';
import AddButton from './AddButton';
import LoadingIndicator from './LoadingIndicator';
import AddDessertModal from './AddDesertModal/AddDessertModal';
import DessertsGallery from './DessertsGallery/DessertsGallery';
import '../styles/main.css';

const DessertsApp = () => {
  const dispatch = useDispatch();

  const desserts = useSelector((state) => state.dessertsState.desserts);
  const isLoading = useSelector((state) => state.dessertsState.isLoading);
  const hasLoaded = useSelector((state) => state.dessertsState.hasLoaded);
  const shouldShowModal = useSelector((state) => state.shouldShowModal);

  const fetchDesserts = () => dispatch(fetchDessertsAction);
  const showModal = () => dispatch(showModalAction);
  const hideModal = () => dispatch(hideModalAction);
  const addDessert = (args) => dispatch(addDessertAction(args));

  return (
    <div className="container">
      <div className="buttons-container fetch-add-btns">
        {!hasLoaded && <FetchButton fetchDesserts={fetchDesserts} />}
        {hasLoaded && <AddButton showModal={showModal} />}
      </div>
      {hasLoaded && <DessertsGallery desserts={desserts} primaryDessert={desserts[0]} />}
      {isLoading && <LoadingIndicator />}
      {shouldShowModal && (
        <AddDessertModal
          hideModal={hideModal}
          addDessert={(args) => addDessert(args)}
        />
      )}
    </div>
  );
};

export default DessertsApp;
