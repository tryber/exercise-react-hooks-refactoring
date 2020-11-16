import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './Context';

function Provider ({ children }) {
  const [cars, setCars] = useState({
    cars: {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }});

  const [signal, setColor ] = useState({ color: 'red' });

  const moveCar = (car, side) => {
    setCars({
      ...cars,
        [car]: side,
    });
  };

  const changeSignal = (signalColor) => {
    setColor({ color: signalColor })
  };

  const context = {
    cars,
    signal,
    moveCar,
    changeSignal
  };

  return (
    <CarsContext.Provider value={ context }>
      { children }
    </CarsContext.Provider>
  );

};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
