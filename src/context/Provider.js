// src/context/Provider.js
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [ cars = {}, moveCar ] = useState({red: false, blue: false, yellow: false});
  const [ signal = {}, changeSignal ] = useState({color: 'red'});

  const moveCarFunc = (car, side) => {
    moveCar((currentState) => ({ ...currentState, [car]: side }));
  };

  const changeSignalFunc = (signalColor) => {
    changeSignal((currentState) => ({ ...currentState, color: signalColor }));
  };

    const context = {
      cars,
      moveCarFunc,
      signal,
      changeSignalFunc,
    };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
};

export default Provider;
