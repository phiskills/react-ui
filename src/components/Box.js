import React from 'react'
import PropTypes from 'prop-types'

import { color } from '../config'

Box.propTypes = {
  border: PropTypes.number,
  width: PropTypes.array,
  height: PropTypes.array,
  children: PropTypes.node.isRequired
}

Box.style = {
  margin: 10,
  padding: 10,
  whiteSpace: 'normal'
}

export function Box ({ border = null, width = null, height = null, children }) {
  const style = { ...Box.style }
  if (border !== null) {
    style.border = `${border}px solid ${color.darker}`
    style.borderRadius = 5
  }
  if (width !== null) {
    const [min, max, overflow] = width
    style.minWidth = min
    style.maxWidth = max
    style.overflowX = overflow
  }
  if (height !== null) {
    const [min, max, overflow] = height
    style.minHeight = min
    style.maxHeight = max
    style.overflowY = overflow
  }
  return <div style={style}>{children}</div>
}
