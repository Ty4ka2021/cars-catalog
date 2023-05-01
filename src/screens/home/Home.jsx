import React from 'react';
import s from './Home.module.css'
import { cars } from './cars.data';

const Home = () => {
  return (
    <div>
      <h1>Cars catalog</h1>
      <div>
        <div className={s.item}>
          <div className={s.image} style={{ backgroundImage: "url(/NissanSkylineR34.jpg)" }} />
          <div className={s.info}>
            <h2>Car 1</h2>
            <p>$100 000</p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;