import React from 'react';
import PropTypes from 'prop-types';
import AddDesertModalForm from './AddDesertModalForm';

const AddDessertModal = (props) => {
  const {
    addDessert,
    hideModal,
  } = props;

  return (
    <AddDesertModalForm
      handleSubmit={({
        name, price, imageUrl, description, id,
      }) => {
        // TODO: Validations
        addDessert({
          name, price, imageUrl, description, id,
        });
      }}
      hideModal={hideModal}
    />
  );
};

AddDessertModal.propTypes = {
  addDessert: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default AddDessertModal;
