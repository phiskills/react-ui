import React from 'react'
import PropTypes from 'prop-types'

import { message } from '../config'

Message.propTypes = {
  type: PropTypes.oneOf(Object.keys(message.types)),
  round: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export function Message ({ type = 'default', round = false, children }) {
  const classNames = [message.types[type], round && message.round]
    .filter(c => !!c)
    .join(' ')

  return <label className={classNames}>{children}</label>
}
