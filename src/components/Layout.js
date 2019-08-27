import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { color } from '../config'

Layout.style = {
  header: {
    backgroundImage: `linear-gradient(to bottom right, ${color.dark}, ${
      color.light
    })`,
    color: color.lighter,
    padding: '0 2rem'
  },
  tab: active => ({
    width: '5rem',
    color: active ? color.lighter : color.darker
  }),
  body: {
    padding: 0
  }
}

Layout.propTypes = {
  actions: PropTypes.array.isRequired,
  navigation: PropTypes.array.isRequired,
  title: PropTypes.array.isRequired
}

export function Layout ({ title, navigation, actions }) {
  const [selection, setSelection] = useState(0)
  const [active, Body] = navigation[selection]
  const [text, logo] = title

  useEffect(() => {
    document.title = `${text.props.children}: ${active}`
  })

  const nav =
    navigation.length === 1 ? (
      <span className='navbar-brand'>{text}</span>
    ) : (
      <ul className='tab tab-block'>
        {navigation.map(([label], index) => {
          return (
            <li
              key={`navigation_${label}`}
              className='tab-item'
              style={Layout.style.tab(index === selection)}
            >
              <a href={`#${label}`} onClick={() => setSelection(index)}>
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    )

  return (
    <div>
      <header className='navbar' style={Layout.style.header}>
        <section className='navbar-section'>
          <span className='navbar-brand'>
            <i className={`fab fa-${logo} h1`} />
          </span>
        </section>
        <section className='navbar-center'>{nav}</section>
        <section className='navbar-section'>
          <div className='dropdown dropdown-right'>
            <button className='btn btn-secondary dropdown-toggle' tabIndex='0'>
              <i className='icon icon-menu' />
            </button>
            <div className='menu'>
              {actions.map(([label, onClick]) => {
                return (
                  <li
                    className='menu-item bg-secondary'
                    key={`action_${label}`}
                  >
                    <button
                      className='menu-item btn btn-link btn-block'
                      style={{}}
                      onClick={onClick}
                    >
                      {label}
                    </button>
                  </li>
                )
              })}
            </div>
          </div>
        </section>
      </header>
      <section style={Layout.style.body}>
        <Body />
      </section>
    </div>
  )
}
