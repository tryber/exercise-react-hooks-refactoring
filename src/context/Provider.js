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

  const [signal, setSignal] = useState(
    {
      color: 'red',
    }
  );

  const moveCar = (car, side) => {
    setCar({
      ...cars,
      [car]: side,
    });
  };

  const changeSignal = (signalColor) => {
    setSignal({
      ...signal,
      color: signalColor,
    });
  };

  return (
    <CarsContext.Provider value={
      {
        ...cars,
        ...signal,
        moveCar: moveCar,
        changeSignal: changeSignal
      }
    }>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
