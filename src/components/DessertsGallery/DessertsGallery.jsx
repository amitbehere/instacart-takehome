import * as React from 'react';
import PropTypes from 'prop-types';
import HeroImage from './HeroImage';
import Summary from './Summary';
import '../../styles/desserts-gallery.css';

const DessertsGallery = (props) => {
  const { desserts, primaryDessert } = props;
  return (
    <section className="desserts-container">
      <HeroImage
        name={primaryDessert.name}
        price={primaryDessert.price.toString()}
        imageUrl={primaryDessert.imageUrl}
        description={primaryDessert.description}
      />
      <div className="desserts-gallery">
        <ul>
          {desserts.map((dessert) => {
            let summary = '';
            const dessertDescription = dessert.description;
            if (dessertDescription && dessertDescription.length > 90) {
              summary = dessertDescription.substring(0, 90);
            }

            const isSummary = !!summary;

            return (
              <li key={dessert.id}>
                <img src={dessert.imageUrl} />
                <div className="list-view-info">
                  <div className="name-price">
                    <div className="price">
                      {Number.parseFloat(dessert.price).toFixed(2)}
                    </div>
                    <div className="name">{dessert.name}</div>
                  </div>
                  <div className="description">
                    {!isSummary && dessertDescription}
                    {isSummary && (
                      <Summary
                        summary={summary}
                        description={dessertDescription}
                      />
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

DessertsGallery.propTypes = {
  desserts: PropTypes.array.isRequired, // eslint-disable-line
  primaryDessert: PropTypes.object.isRequired, // eslint-disable-line
};

export default DessertsGallery;
