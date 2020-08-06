import React, { useRef, useState, useEffect, useImperativeHandle,} from "react";
import myContext from '../utils/commonContext'
import { throttle } from '../utils/utils'

const BaseAudio = React.forwardRef((props, ref) => {
  
  const { src, playing, children, className } = props;
  const audioRef = useRef(null);

  const [audioInfo, setAudioInfo] = useState({})
  const [VOL, setVOL] = useState(1)

  // 无效
  const handleControlVolume = vol => {
    if (typeof vol === 'number' ) {
      // console.log('v', vol)
      setVOL(vol)
      audioRef.current.volume = vol
    }
  }

  // 无效
  const handleSetCurrentTime = cur => {
    console.log('curbase', cur)
    if (typeof cur === 'number') {
      handlePause()
      // setAudioInfo(
      //   changeAudioInfo({
      //     ...audioInfo,
      //     currentTime: cur,
      //   })
      // )
      // audioRef.current.currentTime = cur
    }
  }

  const changeAudioInfo = (info) => {
    return {
      currentTime: 0,
      duration: 0,
      volume: 100,
      handleSetCurrentTime,
      ...info,
    }
  }

  const handlePlayer = () => {
    setAudioInfo(
      changeAudioInfo({
        ...audioInfo,
        duration: Math.ceil(audioRef.current.duration),
        volume: audioRef.current.volume,
      })
    )
  };

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  const handleTimeUpdate = (vol) => {
    setAudioInfo(
      changeAudioInfo({
        ...audioInfo,
        duration: Math.ceil(audioRef.current.duration),
        currentTime: Math.ceil(audioRef.current.currentTime),
        volume: audioRef.current.volume,
      })
    )
    // console.log('audio base', audioRef.current.volume, VOL)
  }

  const handleVolume = () => {
    // console.log('change', audioRef.current.volume, VOL)
    // setVOL(audioRef.current.volume)
    // audioRef.current.volume = .4
  }

  useImperativeHandle(ref, () => {
    return {
      handlePlay,
      handlePause,
      handleControlVolume,
    };
  });

  useEffect(() => {
    audioRef.current.addEventListener("canplay", handlePlayer);
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("volumechange", handleVolume);

    return () => {
      audioRef.current.removeEventListener("canplay", handlePlayer);
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.removeEventListener("volumechange", handleVolume);
    };
  }, [audioRef.current]);

  useEffect(() => {
    playing ? handlePlay() : handlePause()
  }, [playing])
  return (
    <div className={className}>
      <myContext.Provider value={audioInfo}>
        {children}
        <audio ref={audioRef} src={src} preload="auto">
          {/* <track>不支持音频播放器</track> */}
        </audio>
      </myContext.Provider>
    </div>
  );
});
export default BaseAudio;
