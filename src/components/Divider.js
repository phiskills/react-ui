import React from 'react'
import PropTypes from 'prop-types'

import { divider } from '../config'

const options = divider.type
const optionKeys = Object.keys(options)

Divider.propTypes = {
  type: PropTypes.oneOf(optionKeys),
  name: PropTypes.string
}

export function Divider ({ type = optionKeys[0], name }) {
  return name ? (
    <div className={`${options[type]} text-center`} data-content={name} />
  ) : (
    <div className={options[type]} />
  )
}
