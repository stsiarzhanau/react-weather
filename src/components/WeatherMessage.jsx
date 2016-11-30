import React from 'react';

WeatherMessage.propTypes = {
  temp: React.PropTypes.number,
  location: React.PropTypes.string,
};

function WeatherMessage({ temp, location }) {
  return (
    <p className="text-center">It is {temp} in {location}.</p>
  );
}

WeatherMessage.propTypes = propTypes;

export default WeatherMessage;
