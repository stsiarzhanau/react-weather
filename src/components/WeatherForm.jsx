import React, { Component } from 'react';

export default class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    let location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }    
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Enter city name" ref='location' />
        <button>Get Weather</button>
      </form>
    );
  }
}
