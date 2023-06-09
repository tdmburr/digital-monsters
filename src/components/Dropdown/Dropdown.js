import React, { Component } from 'react';
import acquireInfo from '../../apiCalls';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredDigimon: []
    }
  }

  handleChange = (value) => {
    this.setState({ filteredDigimon: this.props.allMonsters.filter(monster => monster.level === value) }, () => {
      if (this.state.filteredDigimon.length > 0) {
        this.props.setFilteredMonsters(this.state.filteredDigimon);
      }
    });
  };

  render() {

    return (
      <form className="dropdown">
        <select
          className="select"
          onChange={event => this.handleChange(event.target.value)}>
          <option value="all">All Digimon</option>
          <option value="Fresh">Fresh</option>
          <option value="In Training">In Training</option>
          <option value="Training">Training</option>
          <option value="Rookie">Rookie</option>
          <option value="Champion">Champion</option>
          <option value="Ultimate">Ultimate</option>
          <option value="Mega">Mega</option>
          <option value="Armor">Armor</option>
        </select>
      </form>
    )
  }
}

export default Dropdown;