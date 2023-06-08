import styles from '../../styles/banner.module.css'

function Banner({ title, picture, customClass }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${picture})`,
      }}
      className={`${customClass} ${styles.fond}`}
    >
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
