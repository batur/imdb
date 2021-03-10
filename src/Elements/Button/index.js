import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

function Button({ children, variant = 2, ...props }) {
  return (
    <button className={variant === 1 ? styles.btnPrimary : styles.btnSecondary} {...props}>
      {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  variant: PropTypes.number,
}
