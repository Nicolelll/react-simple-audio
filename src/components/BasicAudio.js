import React, {useState, useEffect, useRef} from 'react'
import PlayingButton from "./PlayingButton";
import Progress from "./Progress";
import '../styles/basicAudio.css'
import classnames from 'classnames'
import AudioTime from './AudioTime'

const BasicAudio = ({className, playButtonClassName, iconClassName, src, onClick, playing = false, customIcon, ...props}) => {
  const basicClass = classnames('basicContainer', className)
  const playBtnClass = classnames('playBtn', playButtonClassName)
  const playIconClass = classnames('iconStyle', iconClassName)
  const commonProps = {
    onClick,
    playing,
  }

  return (
    <div className={basicClass} {...commonProps}>
      <Progress  {...commonProps} />
      <AudioTime  {...commonProps}  />
      <PlayingButton
        className={playBtnClass} 
        iconClassName={playIconClass} 
        customIcon={customIcon} 
        src={src}
        {...commonProps}
      />
    </div>
  )
}
export default BasicAudio