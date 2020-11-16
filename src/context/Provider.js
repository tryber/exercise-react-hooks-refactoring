// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [cars, setCar] = useState(
    {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
  );

  const moveCar = (car, side) => {
    setCar({
      ...cars,
      [car]: side,
    });
  };

  return (
    <CarsContext.Provider value={{ ...cars, moveCar: moveCar }}>
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
