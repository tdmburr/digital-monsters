import React, { Component } from 'react';
import './App.css';
import acquireInfo from '../../apiCalls'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMonsters: [],
      selectedLevel: null,
      error: ''
    };
  }

  componentDidMount() {
    acquireInfo()
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

  filterDigimon(digimon) {
    let digiLevel = this.state.allMonsters
    digiLevel = digiLevel.filter(monster => monster.name === digimon.name)
    this.setState({ selectedLevel: digiLevel })
  }

  render() {
    return (
      <main className="App">
        <Header />
        <CardContainer allMonsters= {this.state.allMonsters}/>
      </main>
    );
  }
}

export default App;
