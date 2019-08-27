import React from 'react'
import PropTypes from 'prop-types'

import { button } from '../config'
import { Button } from './Button'

Card.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      effect: PropTypes.func.isRequired,
      type: PropTypes.oneOf(Object.keys(button.types))
    })
  ),
  children: PropTypes.node
}

const key = i => {
  return `${i * new Date().getTime()}`
}

export function Card ({
  actions = [],
  title,
  subtitle,
  className,
  children,
  expandable
}) {
  const cardClass = className ? `${className} card` : 'card'
  if (expandable) {
    return (
      <div className={cardClass}>
        <details className='accordion'>
          <summary className='accordion-header'>
            <div className='card-header'>
              <div className='btn-group float-right'>
                {!!actions.length &&
                  actions.map((action, i) => (
                    <Button
                      key={key(i)}
                      type={action.type || 'default'}
                      onClick={action.effect}
                    >
                      {action.title}
                    </Button>
                  ))}
              </div>
              <div className='card-title h5'>
                <strong className='tooltip' data-tooltip='Expand'>
                  <i className='icon icon-arrow-right mr-1' />
                </strong>
                {title}
              </div>
              {subtitle && (
                <div className='card-subtitle text-gray'>{subtitle}</div>
              )}
            </div>
          </summary>
          <div className='card-body'>{children}</div>
        </details>
      </div>
    )
  }
  return (
    <div className={cardClass}>
      <div className='card-header'>
        {!!actions.length && (
          <div className='btn-group float-right'>
            {actions.map((action, i) => (
              <Button
                key={key(i)}
                type={action.type || 'default'}
                onClick={action.effect}
              >
                {action.title}
              </Button>
            ))}
          </div>
        )}
        <div className='card-title h5'>{title}</div>
        {subtitle && <div className='card-subtitle text-gray'>{subtitle}</div>}
      </div>
      <div className='card-body'>{children}</div>
    </div>
  )
}
