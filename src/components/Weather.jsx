import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import ErrorModal from 'ErrorModal';
import getTemp from 'openWeatherMap';


export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errorMessage: undefined,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  componentWillReceiveProps(nextProps) {
    const location = nextProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  handleSearch(location) {
    const self = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
    });

    getTemp(location).then(
      (temp) => {
        self.setState({
          location,
          temp,
          isLoading: false,
        });
      },
      (err) => {
        self.setState({
          isLoading: false,
          errorMessage: err.message,
        });
      },
    );
  }

  render() {
    const { isLoading, temp, location, errorMessage } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <p className="text-center">Fetching weather...</p>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
      return undefined;
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage} />;
      }
      return undefined;
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}

Weather.propTypes = {
  location: React.PropTypes.shape({
    action: React.PropTypes.string,
    hash: React.PropTypes.string,
    key: React.PropTypes.array,
    pathname: React.PropTypes.string,
    query: React.PropTypes.object,
    search: React.PropTypes.string,
    state: React.PropTypes.array,
  }),
};
