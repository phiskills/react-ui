import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './Button'
import { Empty } from './Empty'

Welcome.propTypes = {
  error: PropTypes.instanceOf(Error),
  login: PropTypes.func.isRequired
}

Welcome.style = {
  margin: '5rem'
}

export function Welcome ({ login }) {
  return (
    <div style={Welcome.style}>
      <Empty
        icon='user-astronaut'
        title='Administration access only'
        subtitle='You need to log in as an administrator'
        action={
          <Button type='primary' onClick={login}>
            Login
          </Button>
        }
      />
    </div>
  )
}
