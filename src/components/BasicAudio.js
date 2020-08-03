import React, {useState, useEffect, useRef} from 'react'
import PlayingButton from "./PlayingButton";
import Progress from "./Progress";
import '../styles/basicAudio.css'
import classnames from 'classnames'
import AudioTime from './AudioTime'
import BaseAudio from './BaseAudio'
import Controls from './Controls'

const BasicAudio = ({className, playButtonClassName, iconClassName, src, onClick, playing = false, customIcon, showTime = true,audioInfo, ...props}) => {

  const basicClass = classnames('basicContainer', className)
  const playBtnClass = classnames('playBtn', playButtonClassName)
  const playIconClass = classnames('iconStyle', iconClassName)
  const commonProps = {
    onClick,
    // playing,
    src,
  }

  return (
    <div className={basicClass}>
      <BaseAudio {...commonProps} playing={playing}>
        <Progress playing={playing} />
        <div className='baseAudio'>
          <div className='flex'>
            <div className='img'>
              <img src={audioInfo.img} />
            </div>
            <div className='info'>
              <div className='title'>{audioInfo.name}</div>
              <div className='author'>{audioInfo.author}</div>
            </div>
          </div>

          <div className='flex-center'>
            <PlayingButton
              className={playBtnClass} 
              iconClassName={playIconClass} 
              customIcon={customIcon} 
              playing={playing}
              {...commonProps}
            />
            <Controls type='volume' />
            {showTime && <AudioTime />}
          </div>
        </div>
      </BaseAudio>
    </div>
  )
}
export default BasicAudio