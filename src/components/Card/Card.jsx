import "./card.css";
import clean_icon from "../../assets/clean_icon.png";
//import cloud_icon from "../assets/cloud_icon.png";
//import drizzle_icon from "../assets/drizzle_icon.png";
import humidity_icon from "../../assets/humidity_icon.png";
//import rain_icon from "../assets/rain_icon.png";
//import snow_icon from "../assets/snow_icon.png";
import wind_icon from "../../assets/wind_icon.png";
import { useEffect } from "react";

const Card = () => {
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search("Moscow");
  }, []);

  return (
    <div className="card">
      <img src={clean_icon} alt="" className="weather-icon" />
      <div className="card-info">
        <p className="temperature">24°c</p>
        <p className="location">Moscow</p>
        <div className="weather-data">
          <div className="col">
            <img src={humidity_icon} alt="Humidity" />
            <div>
              <p>91%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={wind_icon} alt="Wind" />
            <div>
              <p>3.7 m/sec</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
