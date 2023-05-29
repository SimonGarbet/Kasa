import styles from '../../styles/tags.module.css'

function Tags({ text }) {
  return (
    <div className={styles.tagsDivision}>
      {text.map((index) => (
        <p key={index}>{index}</p>
      ))}
    </div>
  )
}

export default Tags
