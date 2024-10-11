import React from 'react';
import { useLocation } from 'react-router-dom';

const DisplayComponent = () => {
  const location = useLocation();
  const { value } = location.state || {};

  return (
    <div>
      <h1>Submitted Value:</h1>
      <p>{value ? value : "No value submitted."}</p>
    </div>
  );
};

export default DisplayComponent;
