import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import { getTemp } from 'openWeatherMap';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {

    let self = this;

    
    this.setState({ isLoading: true });    

    getTemp(location).then(
      function (temp) {
        self.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      },
      function (errorMessage) {
        self.setState({ isLoading: false });
        alert(errorMessage);
      }
    );
  }

  render() {
    let { isLoading, temp, location } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <p>Fetching weather...</p>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} /> 
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />        
        {renderMessage()}
      </div>
    );
  }
}