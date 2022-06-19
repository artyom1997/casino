import "./banner.css";
import Slider from "../slider/slider";
import Slide from "../slide/slide";
import banner from "../../files/casino-banners/banner.jpg";

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

  const banners = [
    {
      url: banner,
      id: 1,
      src: "",
    },
    {
      url: banner,
      id: 2,
      src: "",
    },
    {
      url: banner,
      id: 3,
      src: "",
    },
    {
      url: banner,
      id: 4,
      src: "",
    },
    {
      url: banner,
      id: 5,
      src: "",
    },
    {
      url: banner,
      id: 6,
      src: "",
    },
  ];

  return (
    <div className="banner-main">
      <Slider config={config}>
        {banners.map((el) => {
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
