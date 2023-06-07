import React, { Component } from 'react';
import './App.css';
import acquireInfo from '../../apiCalls'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import SingleCard from '../SingleCard/SingleCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMonsters: [],
      selectedMonster: null,
      error: ''
    };
  }

  componentDidMount() {
    Promise.all([acquireInfo('level/fresh'), acquireInfo('level/in training'), acquireInfo('level/training'), acquireInfo('level/rookie'), acquireInfo('level/champion'), acquireInfo('level/ultimate'), acquireInfo('level/mega'), acquireInfo('level/armor')])
    .then(data => console.log(data))
    .then(data => {
        this.setState({
          allMonsters: data
        });
      }) 
    .catch(err => {
        this.setState({
          error: err
        });
      });
  }

  render() {
    return (
      <main>
        <Header />
        <CardContainer allMonsters = {this.state.allMonsters}/>
      </main>
    );
  }
}

export default App;
