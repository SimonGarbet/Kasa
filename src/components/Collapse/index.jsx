import { useState, useEffect } from 'react'

import styles from '../../styles/collapse.module.css'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {}, [isOpen])

  if (Array.isArray(text) === true) {
    return isOpen ? (
      <div className={styles.container}>
        <div className={styles.titre} onClick={() => setIsOpen(false)}>
          <h2>{title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
          </svg>
        </div>
        <div className={styles.textDescription}>
          {text.map((index) => (
            <p key={index}>{index}</p>
          ))}
        </div>
      </div>
    ) : (
      <div className={styles.container}>
        <div className={styles.titre} onClick={() => setIsOpen(true)}>
          <h2>{title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </div>
      </div>
    )
  } else {
    return isOpen ? (
      <div className={styles.container}>
        <div className={styles.titre} onClick={() => setIsOpen(false)}>
          <h2>{title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
          </svg>
        </div>
        <div className={styles.textDescription}>
          <p>{text}</p>
        </div>
      </div>
    ) : (
      <div className={styles.container}>
        <div className={styles.titre} onClick={() => setIsOpen(true)}>
          <h2>{title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </div>
      </div>
    )
  }
}

export default Collapse
