import { useState, useEffect } from 'react'

import styles from '../../styles/collapse.module.css'

import chevronUp from '../../assets/chevron-up-solid.svg'
import chevronDown from '../../assets/chevron-down-solid.svg'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {}, [isOpen])

  if (Array.isArray(text) === true) {
    return isOpen ? (
      <div className={styles.container}>
        <div className={styles.titre} onClick={() => setIsOpen(false)}>
          <h2>{title}</h2>
          <img src={chevronUp} alt="Logo chevron vers le haut" />
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
          <img src={chevronDown} alt="Logo chevron vers le bas" />
        </div>
      </div>
    )
  } else {
    return isOpen ? (
      <div className={styles.container}>
        <div className={styles.titre} onClick={() => setIsOpen(false)}>
          <h2>{title}</h2>
          <img src={chevronUp} alt="Logo chevron vers le haut" />
        </div>
        <div className={styles.textDescription}>
          <p>{text}</p>
        </div>
      </div>
    ) : (
      <div className={styles.container}>
        <div className={styles.titre} onClick={() => setIsOpen(true)}>
          <h2>{title}</h2>
          <img src={chevronDown} alt="Logo chevron vers le bas" />
        </div>
      </div>
    )
  }
}

export default Collapse
