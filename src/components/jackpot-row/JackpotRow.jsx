import "./JackpotRow.css";
import JackpotBlock from "../../utils/jackpot-block/JackpotBlock";
import {jackpotRow} from "../../helpers/pseudo-data/jackpotRow"


export default function JackpotRow() {
  return (
    <div className="jackpot_row">
      {jackpotRow.map(el =>  <JackpotBlock info={el} key={el.id} /> )}
    </div>
  );
}
