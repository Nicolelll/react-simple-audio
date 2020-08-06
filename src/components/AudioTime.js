import React, { useRef, useEffect, useState, useCallback, useReducer, useContext, useMemo } from 'react'
import { formatTime } from '../utils/utils'
import myContext from '../utils/commonContext'
import classnames from 'classnames'
import '../styles/audioTime.css'

const AudioTime = (props) => {
  const {className, handleRenderTime} = props
  const [total, setTotal] = useState(0)
  const [cur, setCur] = useState(0)

  const audioInfo = useContext(myContext)
  const classNames = useMemo(() => classnames('timeContainer', className), [className])

  const renderAudioTime = () => handleRenderTime({
    currentTime: formatTime(audioInfo.currentTime),
    duration: formatTime(audioInfo.duration),
  })

  useEffect(() => {
    setTotal(audioInfo.duration)
  }, [audioInfo.duration])

  useEffect(() => {
    setCur(audioInfo.currentTime)
  }, [audioInfo.currentTime])

  const renderTime = useCallback(() => {
    if (typeof handleRenderTime === 'function') {
      return renderAudioTime()
    } 
    return (<div style={{minWidth: 90}}>{formatTime(cur)}/{formatTime(total)}</div>)
  }, [cur, total])

  return (
    <div className={classNames}>
      {renderTime()}
    </div>
  )
}
export default AudioTime