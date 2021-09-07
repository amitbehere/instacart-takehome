import * as React from 'react';
import '../styles/loading-indicator.css';

export default () => (
  <div className="loading-indicator">
    <img
      src="/loading.gif"
      alt="Loading Indicator to be shown when data is being fetched."
    />
  </div>
);
