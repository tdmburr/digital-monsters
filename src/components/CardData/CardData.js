import React, { Component } from 'react';

class CardData extends Component {
  constructor() {
    super();
    this.state = {
      card: {},
      error: ''
    };
  }

  render() {
    const { card, error } = this.state;

    return (
    <section>
      <img className="cardImg"src={card.img} alt={card.name}/>
      <h2>{card.name}</h2>
      <p>{card.level}</p>
    </section>
    )
  }
}

export default CardData;