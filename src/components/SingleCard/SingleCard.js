import React from 'react';
import './SingleCard.css';

const SingleCard = (props) => {
  return (
    <div className="digiCard card">
      <img className="cardImage" src={props.img} alt={props.name} />
      <h1 className="cardName">{props.name}</h1>
    </div>
  );
};

export default SingleCard;