import Card from "./components/Card";
import Weather from "./components/Weather";
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
