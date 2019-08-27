import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from './Icon'

Empty.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  action: PropTypes.node
}

export function Empty ({ icon, title, subtitle, action }) {
  return (
    <div className='empty'>
      <div className='empty-icon h1'>
        <Icon name={icon} />
      </div>
      <p className='empty-title h5'>{title}</p>
      {subtitle && <p className='empty-subtitle'>{subtitle}</p>}
      {action && <div className='empty-action'>{action}</div>}
    </div>
  )
}
