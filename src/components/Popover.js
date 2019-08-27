import React from 'react'
import PropTypes from 'prop-types'

import { popover } from '../config'

Popover.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  details: PropTypes.node.isRequired
}

export function Popover ({ type = 'bottom', children, details }) {
  return (
    <div className={popover.types[type]}>
      {children}
      <div className='popover-container'>{details}</div>
    </div>
  )
}
