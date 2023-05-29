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
          <i className="fa-solid fa-chevron-left"></i>
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
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    )
  }
}

export default Carrousel
