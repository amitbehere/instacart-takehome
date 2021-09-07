import * as React from 'react';
import PropTypes from 'prop-types';

const AddButton = (props) => (
  <button
    type="button"
    onClick={() => {
      props.showModal();
    }}
  >
    Add Dessert
  </button>
);

AddButton.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default AddButton;
