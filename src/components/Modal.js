import React from 'react'
import PropTypes from 'prop-types'

import { modal } from '../config'
import { Button } from './Button'

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  footer: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(modal.sizes))
}

Modal.style = {
  backgroundColor: 'rgba(0, 0, 0, .3)'
}

export function Modal ({ title, close, children, footer, size = 'default' }) {
  return (
    <div className={`${modal.sizes[size]} active`} style={Modal.style}>
      <div className='modal-container'>
        <div className='modal-header'>
          <Button type='clear' float='right' onClick={close} />
          <div className='modal-title h5'>{title}</div>
        </div>
        <div className='modal-body'>
          <div className='content'>{children}</div>
        </div>
        {footer && <div className='modal-footer'>{footer}</div>}
      </div>
    </div>
  )
}
