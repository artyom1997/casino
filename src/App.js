import "./App.css";
import Banner from "./components/banner/Banner";
import JackpotRow from "./components/jackpot-row/JackpotRow";
import Filter from "./components/filter/Filter";

function App() {
  return (
    <div className="App">
      <Banner />
      <JackpotRow />
      <Filter />
    </div>
  );
}

export default App;
