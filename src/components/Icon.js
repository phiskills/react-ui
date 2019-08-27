import React from 'react'
import PropTypes from 'prop-types'

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string
}

export function Icon ({ name, description }) {
  return description ? (
    <i className={`fas fa-${name} tooltip mx-2`} data-tooltip={description} />
  ) : (
    <i className={`fas fa-${name} mx-2`} />
  )
}
