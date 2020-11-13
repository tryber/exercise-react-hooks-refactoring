import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const carsDefault = {
    red: false,
    blue: false,
    yellow: false,
  }
  const [cars, setState ] = useState(carsDefault);

  const moveCar = (car, side) => {
    setState({
      ...cars,
      [car]: side,
    })
  };

  const context = {
    cars,
    moveCar,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
