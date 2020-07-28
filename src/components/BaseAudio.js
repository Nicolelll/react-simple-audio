import React, { useRef, useEffect, useImperativeHandle, useState } from "react";

const BaseAudio = React.forwardRef((props, ref) => {
  const { src } = props;
  const audioRef = useRef(null);

  const audioInfo = {
    currentTime: 0,
    duration: 0,
  }
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setTotalTime] = useState(0)

  const handlePlayer = () => {
    setTotalTime(Math.ceil(audioRef.current.duration));
  };

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  const handleTimeUpdate = () => {
    setCurrentTime(Math.ceil(audioRef.current.currentTime))
  };

  useImperativeHandle(ref, () => {
    return {
      handlePlay,
      handlePause,
      currentTime,
      duration,
    };
  });

  useEffect(() => {
    audioRef.current.addEventListener("canplay", handlePlayer);
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioRef.current.removeEventListener("canplay", handlePlayer);
      audioRef.current.removeEventListener("ontimeupdate", handleTimeUpdate);
    };
  }, [audioRef.current]);

  return (
    <audio ref={audioRef} src={src} preload="auto">
      {/* <track>不支持音频播放器</track> */}
    </audio>
  );
});
export default BaseAudio;
