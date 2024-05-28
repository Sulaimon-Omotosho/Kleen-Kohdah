import React from 'react'
import styles from './modal.module.css'

const Modal = ({ message, onClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <p className={styles.message}>{message}</p>
        <button className={styles.button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
