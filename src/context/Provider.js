// src/context/Provider.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [cars, setCars] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  });

  const moveCar = (car, side) => {
    setCars((state) => ({
      ...state,
      [car]: side,
    }));
  };

  const context = {
    cars,
    moveCar,
  };

  return (
    <CarsContext.Provider value={context} >
      { children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
