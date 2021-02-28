import React from 'react'
import styles from './style.module.scss'

function Button({ children, variant = 2, ...props }) {
  return (
    <button
      className={variant === 1 ? styles.btnPrimary : styles.btnSecondary}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
