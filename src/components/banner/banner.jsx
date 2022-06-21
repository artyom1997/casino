import "./Banner.css";
import Slider from "../../utils/slider/Slider";
import Slide from "../../utils/slide/Slide";
import { Banners } from "../../helpers/pseudo-data/banners";

export default function Banner() {
  const config = {
    autoplay: true, // true || false
    blockCount: 2, // 1 - children.length
    navigation: true, // true || false
    navigationPosition: "center", // center || space-between
    pagination: true, // true || false
    loopTimer: 2000,
    position: "center", // start || center
    direction: "right", // right || left
    paginationClickable: true, // true || false
  };

  return (
    <div className="banner-main">
      <Slider config={config}>
        {Banners.map((el) => {
          return (
            <Slide key={el.id}>
              <img className="banner_img" src={el.url} alt="" />
            </Slide>
          );
        })}
      </Slider>
    </div>
  );
}
