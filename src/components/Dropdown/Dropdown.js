import React, { Component } from 'react';

class Dropdown extends Component {
  constructor() {
    super();
    this.state= {
      selectedLevel: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({selectedLevel: event.target.value});
  }

  // createOptions = () => {
  //   const options = .map(() => {
  //     return (
  //       <option key={options} value={options}>
  //         {options}
  //       </option>
  //     );
  //   });
  //   return options;
  // };

  render() {

    return (
          <form className="dropdown">
            <select
              className="select"
              value={this.state.selectedLevel}
              onChange={this.handleChange}>
              <option value="all">All Digimon</option>  
              <option value="fresh">Fresh</option>
              <option value="inTraining">In Training</option>
              <option value="training">Training</option>
              <option value="rookie">Rookie</option>
              <option value="champion">Champion</option>
              <option value="ultimate">Ultimate</option>
              <option value="mega">Mega</option>
              <option value="armor">Armor</option>
            </select>
          </form>
    )    
  }
}

export default Dropdown;