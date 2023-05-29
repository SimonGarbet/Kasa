import styles from '../../styles/banner.module.css'

import { useEffect, UseState } from 'react'

function Banner({ title, picture }) {
  return (
    <div className={styles.container}>
      <img src={picture} alt="Titre de la bannière" />
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
