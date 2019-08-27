import React from 'react'
import PropTypes from 'prop-types'

Space.propTypes = {
  size: PropTypes.number
}

export function Space ({ size = 1 }) {
  return <div className={`d-inline-block mx-${size}`} />
}
