import React from 'react';
import s from './../Home.module.css'

const CarItem = ({car}) => {
  return (
    <div className={s.item}>
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
  );
};

export default CarItem;