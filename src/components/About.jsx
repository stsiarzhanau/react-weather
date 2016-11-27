import React from 'react';

export default function About() {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a simple weather app build on React. It shows temperature in
        any city you ask for.
      </p>
      <p>It uses <a href="https://openweathermap.org/"> Open Weather Map </a>
        web service API to search for weather data by city name.
      </p>
    </div>
  );
}
