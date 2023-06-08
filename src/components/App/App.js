import React, { Component } from 'react';
import './App.css';
import acquireInfo from '../../apiCalls'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import Dropdown from '../Dropdown/Dropdown'
import CardData from '../CardData/CardData'
import Error from '../Error/Error'
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMonsters: [],
      filteredMonsters: [],
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
    .catch(() => {
        this.setState({
          error: "The digital world is currently unavailable. Please try again later."
        });
      });
  }

  setFilteredMonsters = (monsters) => {
    this.setState({ filteredMonsters: monsters });
  }

  fetchDigimon = (name) => {
    console.log(acquireInfo(name))
    this.setState({individualDigimon: acquireInfo(name)[0]})
  }

  render() {
    return (
      <main className="App">
        <Header />
        <Switch>
          <Route path="name/:name" render={() => {
            console.log(this.state.individualDigimon)
            return <CardData name={this.state.individualDigimon} />
          }} />
          <Route exact path="/error">
            <Error error="The digital world is currently unavailable. Please try again later"/>
          </Route>
          {this.state.error ? <Redirect to="/error"/> :
          <Route exact path="/">
            <Dropdown allMonsters={this.state.allMonsters} setFilteredMonsters={this.setFilteredMonsters}/>
            {this.state.filteredMonsters.length > 0 && <CardContainer allMonsters={this.state.filteredMonsters} fetchDigimon={this.fetchDigimon}/>}
            {this.state.filteredMonsters.length === 0 && <CardContainer allMonsters={this.state.allMonsters} fetchDigimon={this.fetchDigimon}/>}
          </Route>}
        </Switch>
      </main>
    );
  }
}

export default App;
