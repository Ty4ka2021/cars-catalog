import React, { useEffect, useState } from 'react';
import { cars as carsData } from './cars.data';
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car-form/CreateCarForm';
import { CarService } from '../../services/car.service';

const Home = () => {

  const [cars, setCars] = useState(carsData)

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll()

      setCars(data)
    }

    fetchData()
  }, [])


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