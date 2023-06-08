import React, { Component } from 'react';
import acquireInfo from '../../apiCalls';

class CardData extends Component {
  constructor() {
    super();
    this.state = {
      card: {},
      error: ''
    };
  }

  componentDidMount() {
    acquireInfo()
    .then(data => {
        this.setState({
          card: data
        });
      }) 
    .catch(() => {
        this.setState({
          error: "Oops! That card doesn't seem to exist."
        });
      });
  }

  render() {
    const card = this.state;

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