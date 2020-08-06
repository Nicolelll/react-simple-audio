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

  const [audioSrc, setSrc] = useState('')
  const [srcNum, setSrcNum] = useState(0)
  const commonProps = {
    onClick,
    src: typeof src === 'string' ? src : audioSrc[srcNum],
  }


  useEffect(() => {
    if (typeof src === 'string') {
      setSrc(src)
    } else {
      const temperArr = []
      src.forEach(item => temperArr.push(item.url))
      setSrc(() => setSrc(temperArr))
    }
  }, [src])

  // const ref = useRef(null)

  // const changeAudioInfo = (info) => {
  //   return {
  //     currentTime: 0,
  //     duration: 0,
  //     volume: 1,
  //     ...info,
  //   }
  // }

  // const [audio, setAudio] = useState(changeAudioInfo())

  // useEffect(() => {
  //   if (ref.current) {
  //     setAudio({
  //       ...audio,
  //       duration: ref.current.duration
  //     })
  //   }
  // }, [ref.current])

  const toLast = () => {
    if (typeof audioSrc === 'string') return

    srcNum === 0 ? setSrcNum(audioSrc.length - 1) : setSrcNum(x => x-1)
  }

  const toNext = () => {
    if (typeof audioSrc === 'string') return

    srcNum === audioSrc.length -1 ? setSrcNum(0) : setSrcNum(x => x+1)
  }

  return (
      <div className={basicClass}>
        <BaseAudio {...commonProps} playing={playing}>
          <Progress />
          <div className='baseAudio'>
            <div className='flex'>
              <div className='img'>
                <img src={audioInfo[srcNum] ? audioInfo[srcNum].img : audioInfo.img} />
              </div>
              <div className='info'>
                <div className='title'>{audioInfo[srcNum] ? audioInfo[srcNum].name : audioInfo.name}</div>
                <div className='author'>{audioInfo[srcNum] ? audioInfo[srcNum].author : audioInfo.author}</div>
                {showTime && <AudioTime />}
              </div>
            </div>
            <div className='flex'>
              <Controls type={['toLast']} handleLastOne={toLast} />
              <PlayingButton
                className={playBtnClass} 
                iconClassName={playIconClass} 
                customIcon={customIcon} 
                playing={playing}
                {...commonProps}
              />
              <Controls type={['toNext']} handleNextOne={toNext} />
            </div>
          </div>
        </BaseAudio>
      </div>
  )
}
export default BasicAudio