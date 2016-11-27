import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import getTemp from 'openWeatherMap';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    const self = this;

    this.setState({ isLoading: true });

    getTemp(location).then(
      (temp) => {
        self.setState({
          location,
          temp,
          isLoading: false,
        });
      },
      (errorMessage) => {
        self.setState({ isLoading: false });
        alert(errorMessage);
      },
    );
  }

  render() {
    const { isLoading, temp, location } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <p className="text-center">Fetching weather...</p>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
      return undefined;
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
}
