import Card from "./components/Card/Card";
import Weather from "./components/Weather/Weather";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Weather />
      <Card />
    </div>
  );
};

export default App;
