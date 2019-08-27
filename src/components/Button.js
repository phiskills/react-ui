import React from 'react'
import PropTypes from 'prop-types'
import { button } from '../config'

Button.propTypes = {
  type: PropTypes.oneOf(Object.keys(button.types)),
  size: PropTypes.oneOf(Object.keys(button.sizes)),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  float: PropTypes.oneOf(Object.keys(button.float)),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
}

Button.style = {
  boxSizing: 'border-box'
}

export function Button (props) {
  const {
    type = 'default',
    size = 'default',
    disabled = false,
    loading = false,
    float = 'none',
    onClick,
    children,
    className,
    ...rest
  } = props

  const classes = [
    className,
    button.types[type],
    button.sizes[size],
    disabled && 'disabled',
    loading && 'loading',
    button.float[float]
  ]
    .filter(c => !!c)
    .join(' ')

  return (
    <button
      style={Button.style}
      className={classes}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
