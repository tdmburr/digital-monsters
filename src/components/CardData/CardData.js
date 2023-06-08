import React, { Component } from 'react';
import acquireInfo from '../../apiCalls';

// class CardData extends Component {
//   constructor({ name}) {
//     super({ name });
//     this.state = {
//       card: {},
//       error: ''
//     };
//   }

  const CardData = ({name}) => {

    return (
      <section>
        <img className="cardImg"src={name.img} alt={name.name}/>
        <h2>{name.name}</h2>
        <p>{name.level}</p>
      </section>
    )
  }


export default CardData;