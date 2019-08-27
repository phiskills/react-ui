import React, { useEffect } from 'react'
import './Loader.css'

export function Loader () {
  return (
    <div className='lds-container'>
      <div className='lds-ripple'>
        <div />
        <div />
      </div>
    </div>
  )
}

export function PageLoader () {
  useEffect(() => {
    const styles = [
      ['display', 'flex'],
      ['alignItems', 'center'],
      ['justifyContent', 'center']
    ]
    styles.forEach(([key, value]) => {
      document.body.style[key] = value
    })
    return () => {
      const styles = [
        ['display', 'initial'],
        ['alignItems', 'initial'],
        ['justifyContent', 'initial']
      ]
      styles.forEach(([key, value]) => {
        document.body.style[key] = value
      })
    }
  })

  return <Loader />
}
