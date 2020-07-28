import React, {useState, useEffect} from 'react'

const changeAudioInfo = (info) => {
  return {
    currentTime: 0,
    duration: 0,
    ...info,
  }
}

const useAudioState = (ref, playing = false) => {
  const audioRef = ref.current
  const [audio, setAudio] = useState(changeAudioInfo())

  useEffect(() => {
    if (audioRef) {
      setAudio(changeAudioInfo({
        ...audio,
        duration: audioRef.duration,
      }))
    }
  }, [audioRef])

  useEffect(() => {
    if (audioRef) {
      playing ? audioRef.handlePlay() : audioRef.handlePause()
    }
  }, [playing])

  useEffect(() => {
    if (audioRef) {
      setAudio(changeAudioInfo({
        ...audio,
        currentTime: audioRef.currentTime,
      }))
    }
  }, [audioRef && audioRef.currentTime])

  return [audio]
}

export default useAudioState