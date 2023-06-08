import greyStar from '../../assets/star-solid-grise.svg'
import orangeStar from '../../assets/star-solid-orange.svg'

function Rating({ rate }) {
  console.log(rate)

  switch (rate) {
    case '5':
      return (
        <div>
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={orangeStar} alt="Logo Etoile" />
        </div>
      )

    case '4':
      return (
        <div>
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={greyStar} alt="Logo Etoile" />
        </div>
      )

    case '3':
      return (
        <div>
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={greyStar} alt="Logo Etoile" />
          <img src={greyStar} alt="Logo Etoile" />
        </div>
      )

    case '2':
      return (
        <div>
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={greyStar} alt="Logo Etoile" />
          <img src={greyStar} alt="Logo Etoile" />
          <img src={greyStar} alt="Logo Etoile" />
        </div>
      )

    case '1':
      return (
        <div>
          <img src={orangeStar} alt="Logo Etoile" />
          <img src={greyStar} alt="Logo Etoile" />
          <img src={greyStar} alt="Logo Etoile" />
          <img src={greyStar} alt="Logo Etoile" />
          <img src={greyStar} alt="Logo Etoile" />
        </div>
      )

    default:
      ;<p>Pas de note</p>
  }
}

export default Rating
