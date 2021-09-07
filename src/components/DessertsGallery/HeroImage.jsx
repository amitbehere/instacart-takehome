import * as React from 'react';
import PropTypes from 'prop-types';
import '../../styles/desserts-gallery.css';

const HeroImage = (props) => {
  const {
    name, price, imageUrl, description,
  } = props;
  return (
    <div className="hero-image">
      <img src={imageUrl} />
      <div className="desserts-info">
        <div className="price">{Number.parseFloat(price).toFixed(2)}</div>
        <div className="name">{name}</div>

        <div className="description">
          <details>
            <summary>
              <span>Read More</span>
            </summary>
            <p>{description}</p>
          </details>
        </div>
      </div>
    </div>
  );
};

HeroImage.defaultProps = {
  description: '',
};

HeroImage.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default HeroImage;
