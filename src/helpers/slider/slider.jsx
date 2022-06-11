import cn from "./slider.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
import positionReducer from "./positionReducer";
import createDispatchAcation from "./createDispatchAction";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  useState,
  useEffect,
  useRef,
  Children,
  cloneElement,
  useReducer,
} from "react";

export default function Slider({ config, children }) {
  const [currentSliderPosition, dispatch] = useReducer(positionReducer, 0);
  const [intervalId, setIntervalId] = useState(null);
  const [block, setBlock] = useState([]);
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderInnerRef = useRef(null);

  useEffect(() => {
    setBlock(
      Children.map(children, (child) => {
        return cloneElement(child, {
          config,
          sliderInnerRef,
        });
      })
    );
    clearInterval(intervalId);
    let carouselDirection = null;
    if (config.direction === "left") {
      carouselDirection = carouselStartLeft;
    } else {
      carouselDirection = carouselStartRight;
    }
    if (config.autoplay) {
      let id = setInterval(carouselDirection, config.loopTimer);
      setIntervalId(id);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [config]);

  const carouselStartRight = () => {
    console.log(currentSliderPosition);
    createDispatchAcation(
      currentSliderPosition,
      sliderInnerRef.current.offsetWidth,
      config.blockCount,
      children.length,
      config.direction,
      config.slidesToScroll
    );
    // setSliderPosition((prev) => {
    //   let newPosition = 0;
    //   if (
    //     prev - sliderInnerRef.current.offsetWidth >=
    //     -(
    //       (Math.ceil(children.length / config.blockCount) - 1) *
    //       sliderInnerRef.current.offsetWidth
    //     )
    //   ) {
    //     if (
    //       children.length % config.blockCount !== 0 &&
    //       prev - sliderInnerRef.current.offsetWidth ===
    //         -(Math.ceil(children.length / config.blockCount) - 1) *
    //           sliderInnerRef.current.offsetWidth
    //     ) {
    //       newPosition =
    //         prev -
    //         Math.ceil(sliderInnerRef.current.offsetWidth / config.blockCount) *
    //           (children.length % config.blockCount);
    //     } else newPosition = prev - sliderInnerRef.current.offsetWidth;
    //   }
    //   return newPosition;
    // });
  };

  const carouselStartLeft = () => {
    setSliderPosition((prev) => {
      let newPosition = 0;
      if (prev === 0) {
        newPosition = -(
          (Math.ceil(children.length / config.blockCount) - 1) *
          sliderInnerRef.current.offsetWidth
        );
        if (children.length % config.blockCount !== 0) {
          newPosition +=
            Math.ceil(sliderInnerRef.current.offsetWidth / config.blockCount) *
            (config.blockCount - (children.length % config.blockCount));
        }
      } else {
        if (-prev < sliderInnerRef.current.offsetWidth) {
          newPosition = 0;
        } else newPosition = prev + sliderInnerRef.current.offsetWidth;
      }
      return newPosition;
    });
  };

  const goRight = () => {
    clearInterval(intervalId);
    carouselStartRight();
  };

  const goLeft = () => {
    clearInterval(intervalId);
    carouselStartLeft();
  };

  return (
    <div className={cn.slider}>
      <div
        className={classNames(cn.navigation, cn[config.navigationPosition])}
        onClick={goLeft}
      >
        <FaChevronLeft />
      </div>
      <div className={cn.window}>
        <div
          ref={sliderInnerRef}
          style={{
            transform: `translateX(${sliderPosition}px)`,
          }}
          className={cn.sliderInner}
        >
          {block}
        </div>
      </div>
      <div
        className={classNames(
          cn.navigation,
          cn.right,
          cn[config.navigationPosition]
        )}
        onClick={goRight}
      >
        <FaChevronRight />
      </div>
    </div>
  );
}

Slider.propTypes = {
  config: PropTypes.object,
};

Slider.defaultProps = {
  config: {
    autoplay: true,
    blockCount: 1,
    navigation: false,
    pagination: false,
    loopTimer: 2000,
    position: "start",
    direction: "left",
    paginationClickable: false,
  },
};
