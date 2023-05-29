import logoblanc from '../../assets/logoblanc.png'

import styles from '../../styles/footer.module.css'

function Footer() {
  return (
    <div className={styles.pied}>
      <img src={logoblanc} alt="Logo Kasa" />
      <p>
        <i className="fa-regular fa-copyright"></i> 2020 Kasa. All rights
        reserved
      </p>
    </div>
  )
}

export default Footer
