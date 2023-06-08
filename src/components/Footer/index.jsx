import logoblanc from '../../assets/logoblanc.png'

import styles from '../../styles/footer.module.css'

import copyright from '../../assets/copyright-regular.svg'

function Footer() {
  return (
    <div className={styles.pied}>
      <img src={logoblanc} alt="Logo Kasa" />
      <p>
        <img
          className={styles.copyright}
          src={copyright}
          alt="logo copyright"
        />
        2020 Kasa. All rights reserved
      </p>
    </div>
  )
}

export default Footer
