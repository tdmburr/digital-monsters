import React, { Component } from 'react';
import acquireInfo from '../../apiCalls';
import PropTypes from 'prop-types';
import './CardData.css';

class CardData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digimonData: null,
      error: ''
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
        this.setState({
          error: 'Passing in to the digital world seems to have failed.'
        });
      });
  }

  render() {
    const { digimonData } = this.state;

    if (!digimonData) {
      return null; 
    }

    return (
      <section className="singleContainer">
        <img className="cardImg" src={digimonData.img} alt={digimonData.name} />
        <h2 className="cardName">{digimonData.name}</h2>
        <p className="cardLevel">Stage of Evolution: {digimonData.level}</p>
      </section>
    );
  }
}

export default CardData;

CardData.propTypes = {
  name: PropTypes.string.isRequired
}