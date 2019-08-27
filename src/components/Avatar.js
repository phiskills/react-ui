import React from 'react'
import PropTypes from 'prop-types'

import { avatar } from '../config'

Avatar.propTypes = {
  color: PropTypes.oneOf(Object.keys(avatar.color)),
  initial: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(avatar.sizes)),
  url: PropTypes.string,
  alt: PropTypes.string,
  status: PropTypes.oneOf(Object.keys(avatar.status))
}

export function Avatar ({
  color,
  initial,
  children,
  status,
  size = 'default'
}) {
  const className = [
    avatar.sizes[size] || avatar.sizes.default,
    avatar.color[color] || avatar.color.primary
  ].join(' ')

  return (
    <figure className={className} data-initial={initial}>
      {children}
      {status && <i className={avatar.status[status]} />}
    </figure>
  )
}
