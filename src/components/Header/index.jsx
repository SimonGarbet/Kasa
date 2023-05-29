import { NavLink } from 'react-router-dom'

import logoorange from '../../assets/logoorange.png'

import styles from '../../styles/header.module.css'

function Header() {
  return (
    <div className={styles.entete}>
      <img src={logoorange} alt="Logo Kasa" />
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' }
          }
        >
          {' '}
          Accueil{' '}
        </NavLink>
        <NavLink
          to="/Apropos"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' }
          }
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
