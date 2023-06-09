import React from 'react';
import './SingleCard.css';
import PropTypes from 'prop-types';

const SingleCard = (props) => {
  return (
    <div className="digiCard card">
      <img className="cardImage" src={props.img} alt={props.name} />
      <h1 className="cardName">{props.name}</h1>
    </div>
  );
};

export default SingleCard;

SingleCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}