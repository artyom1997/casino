import "./JackpotRow.css";
import JackpotBlock from "../../utils/jackpot-block/JackpotBlock";
import banner1 from "../../files/jackpot-row/1.jpg";
import banner2 from "../../files/jackpot-row/2.jpg";
import banner3 from "../../files/jackpot-row/3.jpg";
import banner4 from "../../files/jackpot-row/4.jpg";

const jackpotBlockInfo = [
    {
      id: 1,
      img: banner1,
      title:"Jackpot",
      subtitle:"$1000000"
    },
    {
      id: 2,
      img: banner2,
      title:"Jackpot",
      subtitle:"$1000000"
    },
    {
      id: 3,
      img: banner3,
      title:"Jackpot",
      subtitle:"$1000000"
    },
    {
      id: 4,
      img: banner4,
      title:"Jackpot",
      subtitle:"$1000000"
    },
    {
      id: 5,
      img: banner1,
      title:"Jackpot",
      subtitle:"$1000000"
    },
    {
      id: 6,
      img: banner2,
      title:"Jackpot",
      subtitle:"$1000000"
    },
    {
      id: 7,
      img: banner3,
      title:"Jackpot",
      subtitle:"$1000000"
    },
    {
      id: 8,
      img: banner4,
      title:"Jackpot",
      subtitle:"$1000000"
    },
  ];

export default function JackpotRow() {
  return (
    <div className="jackpot_row">
      {jackpotBlockInfo.map(el =>  <JackpotBlock info={el} key={el.id} /> )}
    </div>
  );
}
