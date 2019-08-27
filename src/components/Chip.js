import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './Button'
import { Avatar } from './Avatar'

Chip.propTypes = {
  avatar: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  close: PropTypes.func
}

export function Chip ({ color, avatar, initial = '', children, close }) {
  return (
    <span className='chip'>
      <Avatar color={color} size='small' initial={initial}>
        {avatar}
      </Avatar>
      {children}
      {close && <Button type='clear' float='right' onClick={close} />}
    </span>
  )
}
