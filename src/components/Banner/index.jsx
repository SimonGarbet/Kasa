import styles from '../../styles/banner.module.css'

function Banner({ title, picture }) {
  return (
    <div className={styles.container}>
      <img src={picture} alt="Titre de la bannière" />
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
