import "./Card.css";
import clean_icon from "../assets/clean_icon.png";
import cloud_icon from "../assets/cloud_icon.png";
import drizzle_icon from "../assets/drizzle_icon.png";
import humidity_icon from "../assets/humidity_icon.png";
import rain_icon from "../assets/rain_icon.png";
import snow_icon from "../assets/snow_icon.png";
import wind_icon from "../assets/wind_icon.png";

const Card = () => {
  return (
    <div className="card">
      <img src={clean_icon} alt="" />
      <div className="card-info">
        <p>24°</p>
        <p>Moskow</p>
      </div>
    </div>
  );
};

export default Card;
