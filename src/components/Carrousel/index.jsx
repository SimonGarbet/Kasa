import { useState, useEffect } from 'react'

import styles from '../../styles/carrousel.module.css'

import chevronRight from '../../assets/chevron-right-solid.svg'
import chevronLeft from '../../assets/chevron-left-solid.svg'

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
          <img src={chevronLeft} alt="Photographie précédente" />
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
          <img src={chevronRight} alt="Photographie suivante" />
        </button>
      </div>
    )
  }
}

export default Carrousel
