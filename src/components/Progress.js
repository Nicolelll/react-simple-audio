import React, {useRef, useEffect, useState} from 'react'
import '../styles/progress.css'
import classnames from 'classnames'
import Pointer from './Pointer'
import BaseAudio from './BaseAudio'

const changeSize = (size) => {
  return {
    width: 0,
    height: 0,
    ...size,
  }
}

const Progress = ({className, playing, src}) => {
  const progressClass = classnames('container', className)
  const ref = useRef(null)
  const audioRef = useRef(null)
  const [size, setSize] = useState(changeSize())
  const audio = audioRef.current

  // expect
  // const [current, duration] = useAudio(compnent)

  useEffect(() => {
    setSize(changeSize({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    }))

  }, [])

  useEffect(() => {
    console.log('progress', audio)
  }, [playing])

  const getSize = () => {
    return size
  }

  return (
    <div className={progressClass} ref={ref}>
      <Pointer />
      <BaseAudio ref={audioRef} src={src} />
    </div>
  )
}
export default Progress