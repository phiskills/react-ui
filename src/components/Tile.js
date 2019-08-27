import React from 'react'
import PropTypes from 'prop-types'

Tile.propTypes = {
  avatar: PropTypes.node,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
  actions: PropTypes.node
}

export function Tile ({ avatar, title, subtitle, actions }) {
  return (
    <div className='tile'>
      {avatar && <div className='tile-icon'>{avatar}</div>}
      <div className='tile-content'>
        <div className='tile-title'>{title}</div>
        <div className='tile-subtitle'>{subtitle}</div>
      </div>
      {actions && <div className='tile-action'>{actions}</div>}
    </div>
  )
}
