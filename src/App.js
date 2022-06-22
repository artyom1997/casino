import "./App.css";
import Banner from "./components/banner/Banner";
import JackpotRow from "./components/jackpot-row/JackpotRow";
import Filter from "./components/filter/Filter";
import GameList from "./components/game-list/GameList";

function App() {
  return (
    <div className="App">
      <Banner />
      <JackpotRow />
      <Filter />
      <GameList />
    </div>
  );
}

export default App;
