import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { useDropzone } from 'react-dropzone'

import { button, color } from '../config'

const simplify = (format, onChange) => ({ target }) => {
  const value = format ? format(target.value) : target.value
  onChange && onChange(value)
}

const containerPropTypes = {
  children: PropTypes.node.isRequired
}

function preventSubmit (e) {
  e.preventDefault()
  return false
}

Form.propTypes = containerPropTypes
export function Form ({ children }) {
  return <form onSubmit={preventSubmit}>{children}</form>
}

Form.FieldSet = FieldSet
FieldSet.propTypes = containerPropTypes
function FieldSet ({ children }) {
  return <fieldset>{children}</fieldset>
}
Form.Footer = Footer
Footer.propTypes = containerPropTypes
function Footer ({ children }) {
  return <div className='text-center'>{children}</div>
}
Form.Group = Group
Group.propTypes = containerPropTypes
function Group ({ children }) {
  return <div className='form-group'>{children}</div>
}
Form.Inputs = Inputs
Inputs.propTypes = containerPropTypes
function Inputs ({ children }) {
  return <div className='input-group'>{children}</div>
}
Form.Input = Input
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.func
}
function Input ({ format, onChange, ...props }) {
  return (
    <input
      className='form-input'
      onChange={simplify(format, onChange)}
      {...props}
    />
  )
}
Form.Addon = Addon
Addon.propTypes = {
  children: PropTypes.node.isRequired
}
function Addon ({ children }) {
  return <span className='input-group-addon'>{children}</span>
}
Form.Select = Select
Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired
    })
  ),
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool
}
function Select ({ placeholder, options, onChange, multiple, ...props }) {
  return (
    <select
      className='form-select'
      onChange={simplify(onChange)}
      multiple={multiple}
      {...props}
    >
      {placeholder && (
        <option key={'option_empty'} value=''>
          {placeholder}
        </option>
      )}
      {options.map(({ label, value }) => (
        <option key={`option_${value}`} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}
Form.Button = Button
Button.propTypes = {
  ...containerPropTypes,
  type: PropTypes.oneOf(Object.keys(button.types))
}
function Button ({ type = 'default', children, ...props }) {
  return (
    <button className={`${button.types[type]} input-group-btn`} {...props}>
      {children}
    </button>
  )
}
Form.Switch = Switch
Switch.propTypes = {
  on: PropTypes.bool.isRequired,
  offLabel: PropTypes.string.isRequired,
  onLabel: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
}
function Switch ({ on, offLabel, onLabel, onSwitch }) {
  return (
    <label className='form-switch'>
      <input
        type='checkbox'
        checked={on}
        onChange={({ target }) => onSwitch({ on: target.checked })}
      />
      <i className='form-icon' />
      {on ? <strong>{onLabel}</strong> : offLabel}
    </label>
  )
}
Form.Label = Label
Label.propTypes = containerPropTypes
function Label ({ children }) {
  return <label className='form-label'>{children}</label>
}

Form.FileInput = FileInput
FileInput.styles = {
  base: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: color.darker,
    borderStyle: 'dashed',
    backgroundColor: color.lighter,
    color: color.darker,
    outline: 'none',
    transition: 'border .24s ease-in-out'
  },
  active: {
    borderColor: color.info
  },
  accept: {
    borderColor: color.success
  },
  reject: {
    borderColor: color.error
  }
}
FileInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}
function FileInput ({
  placeholder,
  multiple = false,
  accept = null,
  onChange
}) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    multiple,
    accept
  })

  onChange(acceptedFiles)

  const { styles } = FileInput
  const style = useMemo(
    () => ({
      ...styles.base,
      ...(isDragActive ? styles.active : {}),
      ...(isDragAccept ? styles.accept : {}),
      ...(isDragReject ? styles.reject : {})
    }),
    [isDragActive, isDragReject]
  )

  const content =
    acceptedFiles.length > 0 ? (
      <ul>
        {acceptedFiles.map(file => (
          <li key={file.path}>
            {file.path} - {file.size} bytes
          </li>
        ))}
      </ul>
    ) : (
      <div>{placeholder}</div>
    )

  return (
    <section className='container'>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {content}
      </div>
    </section>
  )
}
