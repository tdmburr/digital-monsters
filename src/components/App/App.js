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
      individualDigimon: null,
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
    acquireInfo(name)
      .then(data => {
        this.setState({
          individualDigimon: data[0]
        })
      })
      .catch(() => {
        this.setState({
          error: "The digital world is currently unavailable. Please try again later."
        });
      })
  }

  render() {
    return (
      <main className="App">
        <Header />
        <Switch>
          {this.state.error ? (
            <Redirect to="/error" />
          ) : (
            <Route exact path="/">
              <Dropdown
                allMonsters={this.state.allMonsters}
                setFilteredMonsters={this.setFilteredMonsters}
              />
              <CardContainer
                allMonsters={this.state.filteredMonsters.length > 0 ? this.state.filteredMonsters : this.state.allMonsters}
                fetchDigimon={this.fetchDigimon}
              />
            </Route>
          )}
          <Route exact path="/:name" render={({ match }) => {
            return <CardData name={match.params.name} />
          }} />
          <Route exact path="/error">
            <Error error="The digital world is currently unavailable. Please try again later" />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default App;
