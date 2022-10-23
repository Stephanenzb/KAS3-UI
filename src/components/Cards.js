import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import KameliaSource from "../assets/images/kamelia.jpg"
import CheikhSource from "../assets/images/cheikh.jpg"
import StephaneSource from "../assets/images/stephane.jpg"

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul>
            <CardItem
              src={StephaneSource}
              text='Data Engineer BI'
              label='Stephane'
            />
          </ul>
          <ul>
            <CardItem
              src={KameliaSource}
              text='Software Engieneer'
              label='Kamelia'
            />
          </ul>
          <ul>
            <CardItem
              src={CheikhSource}
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
