import React, { Component } from 'react';

export default class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const location = this.location.value;
    if (location.length > 0) {
      this.location.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          ref={(c) => { this.location = c; }}
        />
        <button>Get Weather</button>
      </form>
    );
  }
}

WeatherForm.propTypes = {
  onSearch: React.PropTypes.func,
};
