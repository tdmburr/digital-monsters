import React, { Component } from 'react';
import acquireInfo from '../../apiCalls';

class CardData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digimonData: null
    };
  }

  componentDidMount() {
    this.fetchDigimonData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.fetchDigimonData();
    }
  }

  fetchDigimonData() {
    const { name } = this.props;
    acquireInfo(name)
      .then(data => {
        this.setState({
          digimonData: data[0]
        });
      })
      .catch(() => {
      });
  }

  render() {
    const { digimonData } = this.state;

    if (!digimonData) {
      return null; 
    }

    return (
      <section>
        <img className="cardImg" src={digimonData.img} alt={digimonData.name} />
        <h2>{digimonData.name}</h2>
        <p>{digimonData.level}</p>
      </section>
    );
  }
}

export default CardData;