import React, { Component } from 'react';

export default function WeatherMessage({ temp, location }) {
  return (
    <p>It is {temp} in {location}.</p>
  );
}
