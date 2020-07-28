import React, { useRef, useEffect, useState } from 'react'
import BaseAudio from './BaseAudio'
import useAudioState from '../hooks/useAudioState'

const AudioTime = ({playing}) => {
  const audioRef = useRef(null)
  const [total, setTotal] = useState(0)
  const [audio] = useAudioState(audioRef, playing)

  const getAudioInfo = (audio) => {
    console.log(audio)
  }

  useEffect(() => {
    console.log('time ref', audio, playing)
  }, [playing])
  
  return (
    <div>
      <BaseAudio getAudioInfo={getAudioInfo} ref={audioRef} />
      <div>time</div>
      {/* <div>{ref.current.currentTime}/{ref.current.totalTime}</div> */}
    </div>
  )
}
export default AudioTime