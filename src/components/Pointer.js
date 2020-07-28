import React from "react";
import classnames from 'classnames'

const lineStyle = {
  
}

function Pointer({className, type = 'line'}) {
  const pointerClassName = classnames(className)
  return <div className={pointerClassName}></div>;
}
export default Pointer;
