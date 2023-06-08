import { useState, useEffect } from 'react'

import styles from '../../styles/collapse.module.css'

import chevronUp from '../../assets/chevron-up-solid.svg'
import chevronDown from '../../assets/chevron-down-solid.svg'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {}, [isOpen])

  if (Array.isArray(text) === true) {
    return (
      <div className={styles.container}>
        <div className={styles.titre} onClick={() => setIsOpen(!isOpen)}>
          <h2>{title}</h2>
          <img
            src={chevronUp}
            alt="Logo chevron"
            style={{ transform: isOpen ? 'rotate(0turn)' : 'rotate(0.5turn)' }}
          />
        </div>
        <div
          className={styles.textDescription}
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          {text.map((index) => (
            <p key={index}>{index}</p>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.titre} onClick={() => setIsOpen(!isOpen)}>
          <h2>{title}</h2>
          <img
            src={chevronUp}
            alt="Logo chevron"
            style={{ transform: isOpen ? 'rotate(0turn)' : 'rotate(0.5turn)' }}
          />
        </div>
        <div
          className={styles.textDescription}
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          <p>{text}</p>
        </div>
      </div>
    )
  }
}

export default Collapse
