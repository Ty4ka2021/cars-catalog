import React from 'react';
import { cars } from './cars.data';
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car-form/CreateCarForm';

const Home = () => {
  return (
    <div>
      <h1>Cars catalog</h1>
      <CreateCarForm />
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