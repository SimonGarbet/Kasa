import styles from '../../styles/card.module.css'

function Card({ title, picture }) {
  return (
    <figure className={styles.card}>
      <img src={picture} alt="Titre de la location" />
      <p>{title}</p>
    </figure>
  )
}

export default Card
