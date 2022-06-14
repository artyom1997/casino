import cn from "./slider.module.scss";
import PropTypes from "prop-types";
import createMovementType from "../../helpers/createMovementType";
import positionMovement from "../../helpers/positionMovement";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef, useMemo, Children, cloneElement } from "react";


export default function Slider({ config, children }) {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [block, setBlock] = useState([]);
  const sliderInnerRef = useRef(null);

  const carouselStartRight = () => {};

  const carouselStartLeft = () => {
    // setSliderPosition((prev) => {
    //   let newPosition = 0;
    //   if (prev === 0) {
    //     newPosition = -(
    //       (Math.ceil(children.length / config.blockCount) - 1) *
    //       sliderInnerRef.current.offsetWidth
    //     );
    //     if (children.length % config.blockCount !== 0) {
    //       newPosition +=
    //         Math.ceil(sliderInnerRef.current.offsetWidth / config.blockCount) *
    //         (config.blockCount - (children.length % config.blockCount));
    //     }
    //   } else {
    //     if (-prev < sliderInnerRef.current.offsetWidth) {
    //       newPosition = 0;
    //     } else newPosition = prev + sliderInnerRef.current.offsetWidth;
    //   }
    //   return newPosition;
    // });
  };

  const goRight = () => {
    setSliderPosition((prev) => {
      const movemnetArgs = {
        position: config.position,
        width: sliderInnerRef.current.offsetWidth,
        type: createMovementType(
          sliderInnerRef.current.offsetWidth,
          config.blockCount,
          children.length,
          prev,
          config.position
        ),
        blockCount: config.blockCount,
        length: children.length,
      };
      return positionMovement({ prev, ...movemnetArgs });
    });
    clearInterval(intervalId);
  };

  const goLeft = () => {
    // clearInterval(intervalId);
    // carouselStartLeft();
  };

  const navLeftStyles = useMemo(() => {
    if (sliderInnerRef?.current?.offsetWidth) {
      if (config.navigationPosition === "center") {
        return {
          left: `${
            (sliderInnerRef.current.offsetWidth / config.blockCount) *
            ((config.blockCount - 1) / 2)
          }px`,
        };
      } else {
        return {
          left: 0,
        };
      }
    }
  }, [sliderInnerRef.current, config]);

  const navRightStyles = useMemo(() => {
    if (sliderInnerRef?.current?.offsetWidth) {
      if (config.navigationPosition === "center") {
        return {
          right: `${
            (sliderInnerRef.current.offsetWidth / config.blockCount) *
            ((config.blockCount - 1) / 2)
          }px`,
        };
      } else {
        return {
          right: 0,
        };
      }
    }
  }, [sliderInnerRef.current, config]);

  useEffect(() => {
    setBlock(
      Children.map(children, (child) => {
        return cloneElement(child, {
          config,
          sliderInnerRef,
        });
      })
    );
  }, [config]);

  useEffect(() => {
    const movemnetArgs = {
      position: config.position,
      width: sliderInnerRef.current.offsetWidth,
      type: "start",
      blockCount: config.blockCount,
      length: children.length,
    };
    setSliderPosition((prev) => positionMovement({ prev, ...movemnetArgs }));
  }, [config]);

  useEffect(() => {
    if (config.autoplay) {
      let id = setInterval(goRight, config.loopTimer);
      setIntervalId(id);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={cn.slider}>
      <div
        style={navLeftStyles}
        className={cn.navigation}
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
        style={navRightStyles}
        className={cn.navigation}
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
    navigationPosition: "space-between",
    pagination: false,
    loopTimer: 2000,
    position: "start",
    direction: "left",
    paginationClickable: false,
  },
};
