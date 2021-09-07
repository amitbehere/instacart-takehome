import * as React from 'react';
import PropTypes from 'prop-types';
import '../../styles/desserts-gallery.css';

const Summary = (props) => {
  const { summary, description } = props;
  return (
    <details>
      <summary>
        <span className="trimmed-text">{summary}</span>
        <span className="read-more">...Read More</span>
        <span className="read-less">Read Less</span>
      </summary>
      <p>{description}</p>
    </details>
  );
};

Summary.propTypes = {
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Summary;
