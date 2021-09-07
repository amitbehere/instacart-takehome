import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/modal.css';

const AddDesertModalForm = (props) => {
  const [dessertName, setDessertName] = useState('');
  const [dessertPrice, setDessertPrice] = useState('');
  const [dessertImageUrl, setDessertImageUrl] = useState('');
  const [dessertDescription, setDescription] = useState('');
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { handleSubmit, hideModal } = props;

  // TODO: Should be moved to a separate file/module since
  // this can potentially be reused in other forms.
  const checkValid = () => {
    const urlRegExp = new RegExp(
      '^(https?:\\/\\/)?' // protocol
        + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
        + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
        + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
        + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
        + '(\\#[-a-z\\d_]*)?$',
      'i',
    ); // fragment locator

    if (!dessertName) {
      setError(true);
      setErrorMessage('Please provide name.');
    } else if (!dessertPrice || Number.isNaN(dessertPrice)) {
      setError(true);
      setErrorMessage('Please provide valid price.');
    } else if (!dessertImageUrl || !urlRegExp.test(dessertImageUrl)) {
      setError(true);
      setErrorMessage('Please provide valid image URL.');
    }

    return !isError;
  };

  const onFormSubmit = (event) => {
    if (event) {
      event.preventDefault();
      const isFormValid = checkValid();
      if (isFormValid) {
        setIsSubmitting(true);
      }
    }
  };

  useEffect(() => {
    if (!isError && isSubmitting) {
      let summary = '';

      if (dessertDescription && dessertDescription.length > 60) {
        summary = `${dessertDescription.substring(0, 60)}...Read More`;
      }

      handleSubmit({
        name: dessertName,
        price: dessertPrice,
        imageUrl: dessertImageUrl,
        description: dessertDescription,
        summary,
        id: uuidv4(),
      });
      hideModal();
    }
  }, [isError, isSubmitting]);

  return (
    <div className="modal-container">
      <div className="modal-overlay" />

      <div className="modal">
        <form
          onSubmit={(e) => {
            onFormSubmit(e);
          }}
        >
          <h1>Add a dessert</h1>
          {isError && <p className="error-message">{errorMessage}</p>}
          <div className="input-field">
            <label htmlFor="name">
              <span>Name</span>
              <input
                id="name"
                name="name"
                value={dessertName}
                onChange={({ target }) => setDessertName(target.value)}
              />
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="price">
              <span>Price</span>
              <input
                id="price"
                name="price"
                value={dessertPrice}
                onChange={({ target }) => setDessertPrice(target.value)}
              />
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="imageUrl">
              <span>Image URL</span>
              <input
                id="imageUrl"
                name="imageUrl"
                value={dessertImageUrl}
                onChange={({ target }) => setDessertImageUrl(target.value)}
              />
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="description">
              <span>Description</span>
              <textarea
                id="description"
                name="description"
                value={dessertDescription}
                onChange={({ target }) => setDescription(target.value)}
              />
            </label>
          </div>
          <div className="buttons-container">
            <button type="submit">Save</button>
          </div>
          <div
            className="close"
            onClick={() => {
              hideModal();
            }}
          >
            X
          </div>
        </form>
      </div>
    </div>
  );
};

AddDesertModalForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default AddDesertModalForm;
