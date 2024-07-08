import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import Dates from "./components/Dates/Dates";

import "./index.css";
import FutureData from "./components/FutureData/FutureData";

const App = () => {
  return (
    <div className="app">
      <Search />
      <Dates />
      <Card />
      <FutureData />
    </div>
  );
};

export default App;
