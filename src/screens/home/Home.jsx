import React, { useMemo } from 'react';
import { cars } from './cars.data';
import CarItem from './car-item/CarItem';

const Home = () => {

  const filteredCars = useMemo(
    () => cars.filter(car => car.price > 24000), []
  )


  return (
    <div>
      <h1>Cars catalog</h1>
      <div>
        {filteredCars.length ? filteredCars.map(car => (
          <CarItem key={car.id} car={car} />
        ))
          : <p>cars not difaned</p>}

      </div>
    </div>
  );
};

export default Home;