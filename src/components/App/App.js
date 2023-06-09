import React, { Component } from 'react';
import './App.css';
import acquireInfo from '../../apiCalls'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import Dropdown from '../Dropdown/Dropdown'
import CardData from '../CardData/CardData'
import Error from '../Error/Error'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMonsters: [],
      filteredMonsters: [],
      individualDigimon: null,
      error: false
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
          error: true
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
          error: true
        });
      })
  }

  render() {
    if(this.state.error) {
      return (
        <div>
          <Header />
          <Error error="The digital world is currently unavailable. Please try again later" />
        </div>
      )
    }

    return (
      <main className="App">
        <Header />
        <Switch>
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
          <Route exact path="/digimon/:name" render={({ match }) => {
            return <CardData name={match.params.name} />
          }} />
          <Route
            path="/**"
            render={() => (
              <div>
                <Error error="This path does not exist." />
              </div>
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
