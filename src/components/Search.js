import React from 'react';
import { useEffect, useState } from 'react';
import '../components/style.css';
import WeatherDetails from './WeatherDetails';

function Search() {
  const [cityName, setCityName] = useState('mumbai');
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=d06a903268c0308628a1ba4f71f7bf47`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const newWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(newWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <input
            type='search'
            placeholder='Search city..'
            id='search'
            className='searchTerm'
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <button className='searchButton' onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <WeatherDetails {...tempInfo} />
    </>
  );
}

export default Search;
