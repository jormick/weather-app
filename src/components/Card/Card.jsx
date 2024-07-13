import "./card.css";
import clean_icon from "../../assets/clean.png";
import cloud_icon from "../../assets/cloud.png";
import drizzle_icon from "../../assets/drizzle.png";
import humidity_icon from "../../assets/humidity.png";
import rain_icon from "../../assets/rain.png";
import snow_icon from "../../assets/snow.png";
import wind_icon from "../../assets/wind.png";
import { useState, useEffect } from "react";

const Card = (props) => {
  const [currentWeather, setCurrentWeather] = useState({
    wind: 0,
    temp: 0,
    humidity: 0,
    icon: "",
  });

  const allIcons = {
    "01d": clean_icon,
    "01n": clean_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  useEffect(() => {
    if (props.currentWeather !== undefined) {
      setCurrentWeather({
        wind: props.currentWeather.wind.speed,
        temp: Math.round(props.currentWeather.main.temp),
        humidity: props.currentWeather.main.humidity,
        icon: props.currentWeather.weather[0].icon,
      });
    }
  }, [props]);

  return (
    <div className="card">
      <img
        src={allIcons[currentWeather.icon]}
        alt=""
        className="weather-icon"
      />
      <div className="card-info">
        <p className="temperature">{currentWeather.temp}°c</p>
        <p className="location">{props.currentCity}</p>
        <div className="weather-data">
          <div className="col">
            <img src={humidity_icon} alt="Humidity" />
            <div>
              <p>{currentWeather.humidity}%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={wind_icon} alt="Wind" />
            <div>
              <p>{currentWeather.wind} Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
