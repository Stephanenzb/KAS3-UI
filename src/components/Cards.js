import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul>
            <CardItem
              src='images/stephane.jpg'
              text='Data Analyste'
              label='Stephane'
            />
          </ul>
          <ul>
            <CardItem
              src='images/kamelia.jpg'
              text='Software Engieneer'
              label='Kamelia'
            />
          </ul>
          <ul>
            <CardItem
              src='images/cheikh.jpg'
              text='Data Engieneer'
              label='Cheikh'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
