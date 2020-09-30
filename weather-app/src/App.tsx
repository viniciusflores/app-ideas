import React, { useCallback, useState, useEffect } from 'react';
import api from './service/api';
import { Container, Input, Button, WeatherBox } from './styles/App-style';

interface ICityWeather {
  condition_now: {
    code: number;
    icon: string;
    text: string;
  };
  temp_c: string;
  temp_max_c: string;
  temp_min_c: string;
  city: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
}

const App: React.FC = () => {
  const [cityName, setCityName] = useState<string>('');
  const [cityWeather, setCityWeather] = useState<ICityWeather | null>(null);

  useEffect(() => {
    const storage = localStorage.getItem('@HelloWeather:weather');
    if (storage !== null && cityWeather === null) {
      const city = JSON.parse(storage);
      setCityWeather(city);
    }
  }, [cityWeather]);

  const handleClick = useCallback(async () => {
    if (cityName.length < 1) {
      return;
    }

    try {
      const { current, forecast, location } = await api
        .get('/forecast.json', {
          params: {
            key: process.env.REACT_APP_API_KEY,
            q: cityName,
            days: 1,
          },
        })
        .then(res => {
          return res.data;
        });

      const city: ICityWeather = {
        condition_now: current.condition,
        temp_c: [current.temp_c, 'º'].join(''),
        temp_max_c: [forecast.forecastday[0].day.maxtemp_c, 'º'].join(''),
        temp_min_c: [forecast.forecastday[0].day.mintemp_c, 'º'].join(''),
        city: location.name,
        region: location.region,
        country: location.country,
        lat: location.lat,
        lon: location.lon,
      };

      setCityWeather(city);
      setCityName('');
      localStorage.setItem('@HelloWeather:weather', JSON.stringify(city));
    } catch (e) {
      console.log(`ocorreu um erro ao buscar a temperatura: `);
    }
  }, [cityName]);

  const handleInput = useCallback(event => {
    setCityName(event.target.value);
  }, []);

  return (
    <Container>
      <h1>Hello Weather</h1>
      <div>
        <Input
          type="text"
          placeholder="Fill city"
          value={cityName}
          onChange={handleInput}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              handleClick();
            }
          }}
        />

        <Button type="button" onClick={handleClick}>
          Send
        </Button>
      </div>
      {cityWeather ? (
        <WeatherBox>
          <h3>
            {cityWeather?.city}

            <span>{` - ${cityWeather?.country}`}</span>
          </h3>
          <h2> {cityWeather?.temp_c} </h2>

          <img
            src={cityWeather?.condition_now.icon}
            alt={cityWeather?.condition_now.text}
          />
        </WeatherBox>
      ) : null}

      <p>{cityWeather?.region}</p>
      <p>{cityWeather?.country}</p>
    </Container>
  );
};

export default App;
