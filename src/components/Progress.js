import React, {useRef, useEffect, useState, useContext} from 'react'
import '../styles/progress.css'
import classnames from 'classnames'
import Pointer from './Pointer'
import myContext from '../utils/commonContext'

const changeSize = (size) => {
  return {
    width: 0,
    height: 0,
    ...size,
  }
}

const Progress = ({className, showPointer = false, canDrag = false, pointer}) => {
  const audioInfo = useContext(myContext)
  const progressClass = classnames('container', className)
  const ref = useRef(null)
  const [size, setSize] = useState(changeSize())
  const [baseScale, setBaseScale] = useState(0)
  const [pointerVisible, setVisible] = useState(false)

  const progressStyle = {
    width: baseScale * audioInfo.currentTime,
    background: '#4FCAA4',
    height: 2
  }

  const onMouseIn = () => {
    if (!canDrag || !showPinter) return 
    setVisible(true)
  }
  const onMouseOut = () => setVisible(false)

  const onDrag = () => {
    if (!canDrag) return 
    // current: baseScale / (size.width - event.offsetY)
    audioInfo.handleSetCurrentTime(event.offsetX / baseScale)
  }

  useEffect(() => {
    setSize(changeSize({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    }))
  }, [])

  useEffect(() => {
    if (!isNaN(size.width / audioInfo.duration)) {
      setBaseScale((size.width / audioInfo.duration).toFixed(2))
    }
  }, [audioInfo.duration])


  return (
    <div className={progressClass} ref={ref} onMouseOver={onMouseIn} onMouseOut={onMouseOut}>
      <div style={progressStyle}></div>
      {
        typeof pointer === 'function' ?
        pointer() :
        <Pointer 
          x={baseScale * audioInfo.currentTime} 
          visible={pointerVisible} 
          isDrag={canDrag}
          onDrag={onDrag} 
          style={typeof pointer === 'object' && pointer}
        />
      }
    </div>
  )
}
export default Progress