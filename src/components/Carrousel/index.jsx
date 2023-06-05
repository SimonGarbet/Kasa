import { useState, useEffect } from 'react'

import styles from '../../styles/carrousel.module.css'

function Carrousel({ pictures }) {
  const [indexValue, setIndexValue] = useState(0)

  useEffect(() => {}, [indexValue])

  console.log(indexValue)
  console.log(pictures.length)

  if (pictures.length === 1) {
    return (
      <div className={styles.generalCarrousel}>
        <img src={pictures[0]} alt="Photographie de l'appartement"></img>
      </div>
    )
  } else {
    return (
      <div className={styles.generalCarrousel}>
        <button
          onClick={() => {
            if (indexValue === 0) {
              setIndexValue(pictures.length - 1)
            } else {
              setIndexValue(indexValue - 1)
            }
          }}
          className={styles.prevButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            {' '}
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </button>

        <img
          src={pictures[indexValue]}
          alt="Photographie de l'appartement"
        ></img>

        <p>
          {indexValue + 1}/{pictures.length}
        </p>

        <button
          onClick={() => {
            if (indexValue === pictures.length - 1) {
              setIndexValue(0)
            } else {
              setIndexValue(indexValue + 1)
            }
          }}
          className={styles.nextButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </button>
      </div>
    )
  }
}

export default Carrousel
