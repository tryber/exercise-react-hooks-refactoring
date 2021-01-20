// src/Cars.jsx

import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
    const { cars: { red, blue, yellow }, moveCarFunc } = useContext(CarsContext);

    return (
      <div>
        <div>
          <img
            className={red ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCarFunc('red', !red)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={blue ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCarFunc('blue', !blue)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={yellow ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCarFunc('yellow', !yellow)}
            type="button"
          >
            Move
        </button>
        </div>
      </div>
    );
};

export default Cars;
