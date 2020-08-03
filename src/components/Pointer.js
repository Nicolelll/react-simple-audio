import React from "react";
import classnames from 'classnames'

function Pointer({className, type = 'line', x, visible = false, isDrag, onDrag}) {
  const pointerClassName = classnames('basePointer', className)

  const progressStyle = {
    position: 'absolute',
    left: x,
    top: -3,
    display: visible ? 'block' : 'none',
    cursor: 'pointer',
  }

  // const onDrag = () => {
  //   // if (!canDrag) return 
  //   console.log('offsetY', event.offsetY, 'width', size.width)
  // }

  return <div className={pointerClassName} style={progressStyle} draggable onDrag={onDrag}></div>;
}
export default Pointer;
