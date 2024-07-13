import "./search.css";
import search_icon from "../../assets/search.png";
import { useState } from "react";

const Search = (props) => {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="header">
      <div className="search-bar">
        <input
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          type="text"
          placeholder="Enter a City..."
        />

        <img
          onClick={() => {
            props.onSubmit(searchString);
          }}
          src={search_icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Search;
