import Game from "../../utils/game/Game";
import "./GameList.css";
import { useSelector } from "react-redux";

export default function GameList() {
  const games = useSelector((state) => state.filter.games);

  return (
    <div className="game-list">
      {games.map((el) => {
        return <Game key={el.id} game={el} />;
      })}
    </div>
  );
}
