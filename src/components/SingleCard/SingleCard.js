import React from 'react';
import cardData from '../CardData/CardData';

const SingleCard = ({ cardData }) => {

  console.log(cardData);

  return (
      <div className="digiCard">
        <img src={cardData.img}></img>
        <h1>{cardData.name}</h1>
      </div>
    )
}

export default SingleCard;