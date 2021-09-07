import { hot } from 'react-hot-loader/root';
import React from 'react';
import DesertsApp from './components/DessertsApp';

function App() {
  return (
    <div className="App">
      <DesertsApp />
    </div>
  );
}

// This adds HMR via react-hot-loader
export default hot(App);
