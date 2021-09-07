import * as React from 'react';
import PropTypes from 'prop-types';

const FetchButton = (props) => (
  <button
    type="button"
    onClick={() => {
      props.fetchDesserts();
    }}
  >
    Get Desserts
  </button>
);

FetchButton.propTypes = {
  fetchDesserts: PropTypes.func.isRequired,
};

export default FetchButton;
