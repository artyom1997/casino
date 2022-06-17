import "./banner.css";
import Slider from "../slider/slider";
import Slide from "../slide/slide"

export default function Banner() {
  const config = {
    autoplay: true,
    blockCount: 2,
    navigation: true,
    navigationPosition: "space-between",
    pagination: true,
    loopTimer: 2000,
    position: "start",
    direction: "right",
    paginationClickable: true,
  };

  return (
    <div className="banner-main">
      <Slider config={config}>
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>3</Slide>
        <Slide>4</Slide>
        <Slide>5</Slide>
        <Slide>6</Slide>
        <Slide>7</Slide>
        <Slide>8</Slide>
        <Slide>9</Slide>
        <Slide>10</Slide>
        <Slide>11</Slide>
      </Slider>
    </div>
  );
}
