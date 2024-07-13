import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import Dates from "./components/Dates/Dates";
import tg_logo from "./assets/tg_logo.png";

import "./index.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(false);
  const [currentWeather, setCurrentWeather] = useState();
  const [currentCity, setCurrentCity] = useState();

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();
      const filteredList = data.list.filter((item, index) => {
        if ((index + 1) % 8 === 0) {
          console.log(index);
          console.log(data.list);
          return true;
        } else {
          return false;
        }
      });

      const preparedData = {
        ...data,
        list: filteredList,
      };

      //const icon = allIcons[data.weather[0].icon] || clean_icon;
      setWeatherData(preparedData);
      setCurrentCity(data.city.name);
      setCurrentWeather(data.list[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDateChange = (dateIndex) => {
    setCurrentWeather(weatherData.list[dateIndex]);
  };

  return (
    <div className="app">
      <Search
        onSubmit={(searchString) => {
          search(searchString);
        }}
      />
      {currentWeather ? (
        <>
          <Dates onChange={handleDateChange} />
          <Card currentWeather={currentWeather} currentCity={currentCity} />
        </>
      ) : (
        <div className="preloadCard">
          The best way to find out the weather in the... <span>world.</span>
          <a href="https://t.me/jormunbard" target="_blank">
            <img src={tg_logo} alt="" />
            for feedback
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
