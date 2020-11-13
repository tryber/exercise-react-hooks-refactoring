import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider ( {children} ) {
  const initial_cars = {
    redCar: false,
    blueCar: false,
    yellowCar: false,
  }
  const [ cars, setcar ] = useState({...initial_cars});

  const moveCar = (car, side) => {
    setcar({[car]: side});
  };

  const contextValue = {
    ...cars,
    moveCar,
  };

  return (
    <CarsContext.Provider value={contextValue}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
