import React from 'react';
import s from './Home.module.css'
import { cars } from './cars.data';

const Home = () => {
  return (
    <div>
      <h1>Cars catalog</h1>
      <div>
        {cars.map(car => (
          <div key={car.id} className={s.item}>
            <div className={s.image} style={{ backgroundImage: `url(${car.image})` }} />
            <div className={s.info}>
              <h2>{car.name}</h2>
              <p>{new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(car.price)}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Home;