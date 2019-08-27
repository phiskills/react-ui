import React from 'react'
import PropTypes from 'prop-types'

import { notification } from '../config'

Notification.prototype = {
  type: PropTypes.oneOf(Object.keys(notification.types)),
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export function Notification ({ type = 'default', close, children }) {
  return (
    <div className={notification.types[type]}>
      <button className='btn btn-clear float-right' onClick={close} />
      {children}
    </div>
  )
}
