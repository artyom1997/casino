import cn from "./Game.module.scss";

export default function Game({ game }) {
  return (
    <div className={cn.game}>
      <div style={{ backgroundImage: `url(${game.img})` }} className={cn.game_info}></div>
      <div className={cn.game_title}>{game.title}</div>
    </div>
  );
}
