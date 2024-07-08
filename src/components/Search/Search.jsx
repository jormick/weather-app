import "./search.css";
import search_icon from "../../assets/search_icon.png";

const Search = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Enter a City..." />
        <img src={search_icon} alt="" />
      </div>
    </div>
  );
};

export default Search;
