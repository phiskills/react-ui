import React from 'react'
import PropTypes from 'prop-types'

import { Range } from 'basic'

const sizes = Range({ start: 1, end: 12 }).toArray()

const containerPropTypes = {
  children: PropTypes.node.isRequired
}

Grid.propTypes = containerPropTypes
Row.propTypes = containerPropTypes
Column.propTypes = {
  ...containerPropTypes,
  size: PropTypes.oneOf(sizes)
}

export function Grid ({ children }) {
  return <div className='container'>{children}</div>
}

Grid.Row = Row
function Row ({ children }) {
  return <div className='columns'>{children}</div>
}

Grid.Column = Column
function Column ({ size, children }) {
  return <div className={`column col-${size}`}>{children}</div>
}
