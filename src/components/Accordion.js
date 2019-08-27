import React from 'react'
import PropTypes from 'prop-types'

Accordion.propTypes = {
  header: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  open: PropTypes.bool
}

export function Accordion ({ header, body, open }) {
  return (
    <details className='accordion' open={open}>
      <summary className='accordion-header'>
        {header}
        <strong
          style={{ float: 'right' }}
          className='tooltip'
          data-tooltip='Expand'
        >
          <i className='icon icon-arrow-down mr-1' />
        </strong>
      </summary>
      <div className='accordion-body'>{body}</div>
    </details>
  )
}
