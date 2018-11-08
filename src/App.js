import React, { Component } from 'react';
import Weather from './components/weather'
import SelectCity from './components/selectCity'

import './App.css';

class App extends Component {
  state = {
    cityName: 'Duzce'
  }

  
  selectCity = (cityName) => {
    this.setState({cityName})
  }

  render() {
    return (
      <div className="App">
        <h1>Weather</h1>
        <SelectCity onSelect={this.selectCity}/>
        <Weather city={this.state.cityName}/>
      </div>
    );
  }
}

export default App;
