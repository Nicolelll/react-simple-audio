import React, { useState, useContext, useEffect, useRef, useMemo } from "react";
import classnames from "classnames";
import myContext from "../utils/commonContext";
import { throttle } from "../utils/utils";
import "../styles/controls.css";

const Controls = ({ className, type, handleLastOne, handleNextOne, }) => {
  const [vol, setVol] = useState(100);
  const [volWidth, setWidth] = useState(0);
  const [volRate, setVolRate] = useState(1);

  const audioInfo = useContext(myContext);

  const ref = useRef(null);

  const volClassNames = classnames("iconfont control-icon", className);

  const lineStyle = useMemo(
    () => ({
      width: volWidth > 0 ? volRate * vol : "100%",
    }),
    [volWidth, vol]
  );

  const handleChangeVol = throttle(() => {
    // event.preventDefault()
    if (vol + event.offsetX <= 0) {
      setVol(0)
    } else if (vol + event.offsetXol >= 100) {
      setVol(100)
    } else {
      setVol(vol + event.offsetX);
    }
    // audioInfo.handleControlVolume(parseFloat((vol / 100).toFixed(2)));
  }, 100);


  useEffect(() => {
    setVol(audioInfo.volume * 100);
    console.log("con", audioInfo.volume);
  }, [audioInfo.volume]);

  useEffect(() => {
    if (ref.current && ref.current.offsetWidth > 0) {
      setWidth(ref.current.offsetWidth);
      setVolRate(ref.current.offsetWidth / (audioInfo.volume * 100));
    }
  }, [ref.current, audioInfo]);

  return (
    <div className="control-container">
      {/* 上一曲 */}
      {type.includes("toLast") && (
        <span
          onClick={handleLastOne}
          className={`${volClassNames} icon-skip-back-fill`}
        ></span>
      )}

      {/* 下一曲 */}
      {type.includes("toNext") && (
        <span
          onClick={handleNextOne}
          className={`${volClassNames} icon-skip-forward-fill`}
        ></span>
      )}

      {/* 音量 */}
      {type.includes("volume") && (
        <div className='flex flex-baseline'>
          <span
            className={`${volClassNames} icon-volume-down-fill`}
          ></span>
          <div className='volume-box'>
            <div className="vloume-line" style={lineStyle} ref={ref}>
              <div
                className="volume-point"
                draggable
                onDrag={handleChangeVol}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Controls;
