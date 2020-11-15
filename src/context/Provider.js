// src/context/Provider.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const [signalColor, setSignalColor] = useState('red');

  const moveCar = (car, side) => {
    setCars((state) => ({
      ...state,
      [car]: side,
    }));
  };

  const changeSignal = (signalColor) => {
    setSignalColor(signalColor);
  };

  const context = {
    cars,
    moveCar,
    signalColor,
    changeSignal,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
