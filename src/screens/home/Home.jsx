import React, { useState } from 'react';
import { cars as carsData } from './cars.data';
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car-form/CreateCarForm';

const Home = () => {

  const [cars, setCars] = useState(carsData)
  console.log(cars);
  return (
    <div>
      <h1>Cars catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? cars.map(car => (
          <CarItem key={car.id} car={car} />
        ))
          : <p>cars not difaned</p>}

      </div>
    </div>
  );
};

export default Home;