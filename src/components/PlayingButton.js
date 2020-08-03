import React, { useRef, useCallback, useEffect } from "react";
import BaseAudio from "./BaseAudio";
import classnames from "classnames";
import "../styles/playingButton.css";

const PlayingButton = ({ className, iconClassName, src, playing = false, customIcon, ...props }) => {
  const classname = classnames("playingButton", className);
  const iconClass = (styles) => classnames('iconfont', 'icon', styles, iconClassName)
  const audioRef = useRef(null);
  const audio = audioRef.current;

  useEffect(() => {
    if (audio) {
      playing ? audio.handlePlay() : audio.handlePause();
    }
  }, [playing]);


  const renderIcon = useCallback(() => {
    if (customIcon) {
      return (
        playing ? (
          customIcon.pauseIcon
        ) : (
          customIcon.playIcon
        )
      )
    }
    return playing ? (
      <span className={iconClass('icon-pause-circle-fill')}></span>
    ) : (
      <span className={iconClass('icon-play-circle-fill')}></span>
    );
  }, [playing]);

  return (
    <div className={classname} {...props}>
      {renderIcon()}
      <BaseAudio ref={audioRef} src={src} />
    </div>
  );
};

export default PlayingButton;
