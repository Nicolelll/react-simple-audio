import React, {useState, useContext, useEffect, useRef, useMemo,} from 'react'
import classnames from 'classnames'
import myContext from '../utils/commonContext'
import { throttle } from '../utils/utils' 
import '../styles/controls.css'

const Controls = ({className, type}) => {
  const [hide, setHide] = useState(true)
  const [vol, setVol] = useState(100)
  const [volHeight, setHeight] = useState(0)
  const [volRate, setVolRate] = useState(1)

  const audioInfo = useContext(myContext)

  const ref = useRef(null)

  const volClassNames = classnames('iconfont control-icon', className)
  const volBoxClass = (state = hide) => classnames('volume-box', {'hidden': state})

  const lineStyle = useMemo(() => ({
    height: volHeight > 0 ? volRate * vol : '100%',
  }), [volHeight, vol])

  const handleVolume = () => {
    setHide(!hide)
  }

  const handleChangeVol = throttle(() => {
    // event.preventDefault()
    if (!hide) {
      setVol(vol + event.offsetY)
      audioInfo.handleControlVolume(parseFloat((vol/100).toFixed(2)))
    }
  }, 100)

  useEffect(() => {
    setVol(audioInfo.volume * 100)
    console.log('con', audioInfo.volume)
  }, [audioInfo.volume])
  
  useEffect(() => {
    if (ref.current.offsetHeight > 0) {
      setHeight(ref.current.offsetHeight)
      setVolRate(ref.current.offsetHeight/(audioInfo.volume * 100))
    }
  }, [hide])

  return (
    <div>
      {/* 音量 */}
      <div>
        <div className={volBoxClass()}>
          <div className='vloume-line' style={lineStyle} ref={ref}>
            <div className='volume-point' draggable onDrag={handleChangeVol}></div>
          </div>
        </div>
        <span onClick={handleVolume} className={`${volClassNames} icon-volume-down-fill`}></span>
      </div>

    </div>
  )
}
export default Controls