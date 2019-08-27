import React from 'react'
import PropTypes from 'prop-types'

import { Card } from './Card'
import { Empty as DefaultEmpty } from './Empty'
import { Icon } from './Icon'

List.propTypes = {
  items: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  Item: PropTypes.func.isRequired,
  Empty: PropTypes.func,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      effect: PropTypes.func.isRequired
    })
  ),
  info: PropTypes.node,
  single: PropTypes.bool,
  expandable: PropTypes.bool,
  horizontal: PropTypes.bool
}

export function List ({
  items,
  name,
  icon,
  Item,
  Empty,
  actions,
  info,
  single,
  expandable,
  horizontal
}) {
  const Container = ({ children }) =>
    horizontal ? (
      <div style={{ display: 'inline-block' }}>{children}</div>
    ) : (
      <div>{children}</div>
    )

  const Elements = ({ Body }) =>
    items && items.length ? (
      items.map((props, i) => (
        <Container key={`${name}_${i}`}>
          <Body>
            <Item index={i} {...props} />
          </Body>
        </Container>
      ))
    ) : Empty ? (
      <Empty />
    ) : (
      <DefaultEmpty icon={icon} title={`No ${name}`} />
    )

  const style = horizontal ? { overflowX: 'scroll', whiteSpace: 'nowrap' } : {}
  const ListBody = ({ children }) => <div style={style}>{children}</div>

  const Content = ({ Body }) => (
    <ListBody>
      <Elements Body={Body} />
    </ListBody>
  )

  const Div = ({ children, ...props }) => <div {...props}>{children}</div>

  const [inside, outside] = single
    ? [<Content Body={Div} />, null]
    : [null, <Content Body={Card} />]

  return (
    <>
      <Card
        title={
          <div className='d-inline-block'>
            <div className='d-inline-block' style={{ width: 300 }}>
              <Icon name={icon} description={name} />
              <span>{name.toUpperCase()}:</span>
            </div>
            <div className='d-inline-block'>{info}</div>
          </div>
        }
        actions={actions}
        expandable={expandable}
      >
        {inside}
      </Card>
      {outside}
    </>
  )
}
