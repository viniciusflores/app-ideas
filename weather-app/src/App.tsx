import React, { useCallback, useState } from 'react';
import api from './service/api';
import { Container, Input, Button } from './styles/App-style';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('');

  const handleClick = useCallback(async () => {
    try {
      const response = await api
        .get('/weather', {
          params: {
            appid: process.env.REACT_APP_API_KEY,
            q: city,
          },
        })
        .then(res => {
          return res.data;
        });

      console.log(`Esse é a response:`);
      console.log(response);
    } catch (e) {
      console.log(`ocorreu um erro ao buscar a temperatura: `);
    }
  }, [city]);

  const handleInput = useCallback(event => {
    setCity(event.target.value);
  }, []);

  return (
    <Container>
      <h1>hello weather</h1>

      <Input
        type="text"
        placeholder="Fill city"
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
    </Container>
  );
};

export default App;

/*
EpochTime: 1600798800
HasPrecipitation: false
IsDayTime: true
Link: "http://www.accuweather.com/en/br/novo-hamburgo/35731/current-weather/35731?lang=en-us"
LocalObservationDateTime: "2020-09-22T15:20:00-03:00"
MobileLink: "http://m.accuweather.com/en/br/novo-hamburgo/35731/current-weather/35731?lang=en-us"
PrecipitationType: null
Temperature: {Metric: {…}, Imperial: {…}}
WeatherIcon: 1
WeatherText: "Sunny"
*/
