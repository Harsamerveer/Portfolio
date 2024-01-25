import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your AccuWeather API key
    const apiKey = 'e63ABquK856K5CE5yJxSEhbcYfZFfz4P';
    const city = 47170; // Replace with the desired city

    const apiUrl = `https://dataservice.accuweather.com/currentconditions/v1/${city}?apikey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data[0]); // Assuming you want the first result
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []); // Empty dependency array ensures the effect runs once on component mount

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { Temperature, WeatherText, WeatherIcon } = weatherData;

  return (
    <div >
      <div className="temperature">{`Temperature: ${Temperature.Metric.Value} ${Temperature.Metric.Unit}`}</div>
      <div className="weather-text">{`Weather: ${WeatherText}`}</div>
      <img
        src={`https://developer.accuweather.com/sites/default/files/${WeatherIcon}-s.png`}
        alt="Weather Icon"
      />
    </div>
  );
};

export default WeatherComponent;
