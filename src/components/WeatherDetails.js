import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function WeatherDetails({
  temp,
  humidity,
  pressure,
  weatherType,
  name,
  speed,
  country,
  sunset,
}) {
  const [weatherState, setWeatherState] = useState(''); // responsible for weather change

  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case 'Clouds':
          setWeatherState('wi-day-cloudy');
          break;
        case 'Haze':
          setWeatherState('wi-fog');
          break;
        case 'Clear':
          setWeatherState('wi-day-sunny');
          break;
        case 'Mist':
          setWeatherState('wi-dust');
          break;
        case 'Rain':
          setWeatherState('wi-day-rain');
          break;
        default:
          setWeatherState('wi-day-sunny');
          break;
      }
    }
  }, [weatherType]);

  //converting the seconds into hour
  let sec = sunset;
  let date = new Date(sec * 1000);
  let time = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <article className='widget'>
        <div className='weatherIcon'>
          <i className={`${weatherState}`}></i>
        </div>
        <div className='weatherInfo'>
          <div className='temperature'>
            <span>{temp}℃</span>
          </div>
          <div className='description'>
            <div className='weatherCondition'>{weatherType}</div>
            <div className='place'>
              {name}, {country}
            </div>
          </div>
        </div>
        <div className='date'>{new Date().toLocaleString()}</div>
        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={`wi wi-sunset`} />
              </p>
              <p className='extra-info-leftside'>
                {time} PM <br />
                Sunset
              </p>
            </div>
            <div className='two-sided-section'>
              <p>
                <i className={`wi wi-humidity`} />
              </p>
              <p className='extra-info-leftside'>
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className='weather-extra-info'>
            <div className='two-sided-section'>
              <p>
                <i className={`wi wi-rain`} />
              </p>
              <p className='extra-info-leftside'>
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className='two-sided-section'>
              <p>
                <i className={`wi wi-strong-wind`} />
              </p>
              <p className='extra-info-leftside'>
                {speed} <br />
                Wind Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherDetails;
