import React, { Component } from 'react';
import './App.css';
import acquireInfo from '../../apiCalls'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import Dropdown from '../Dropdown/Dropdown'
import CardData from '../CardData/CardData'
import Error from '../Error/Error'
import { Route, Switch, Redirect } from'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMonsters: [],
      selectedLevel: '',
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


  render() {
    return (
      <main className="App">
        <Header />
        <Switch>
        <Route path="/digimon/level/:level" render={({ match }) => {
          return <CardData selectedLevel={match.params.level} />
        }} />
        <Route exact path="/error">
          <Error error="The digital world is currently unavailable. Please try again later"/>
        </Route>
        {this.state.error ? <Redirect to="/error"/> :
        <Route exact path="/">
          <Dropdown selectedLevel={this.state.selectedLevel}/>
          <CardContainer allMonsters= {this.state.allMonsters}/>
        </Route>}
        <Route>
          <Redirect to="/error"/>
        </Route>
        </Switch>
      </main>
    );
  }
}

export default App;
