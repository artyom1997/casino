import cn from "./JackpotBlock.module.scss";

export default function JackpotBlock({ info }) {
  return (
    <div
      style={{ backgroundImage: `url(${info.img})` }}
      className={cn.jackpot_block}
    >
      <div className={cn.block_info}>
           <div className={cn.title}>{info.title}</div>
           <div className={cn.subtitle}>{info.subtitle}</div>

      </div>
    </div>
  );
}
