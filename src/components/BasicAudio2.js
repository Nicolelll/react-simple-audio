import React, {useState, useEffect, useRef} from 'react'
import PlayingButton from "./PlayingButton";
import Progress from "./Progress";
import '../styles/basicAudio.css'
import classnames from 'classnames'
import AudioTime from './AudioTime'
import BaseAudio from './BaseAudio'
import Controls from './Controls'

const CustomAudio = ({className, src, onClick, playing = false, children, ...props}) => {

  const basicClass = classnames('basicContainer', className)
  const audioRef = useRef(null)

  return (
    <div className={basicClass} onClick={onClick}>
      <BaseAudio ref={audioRef} src={src} playing={playing}>
        {children}
      </BaseAudio>
    </div>
  )
}
export default CustomAudio