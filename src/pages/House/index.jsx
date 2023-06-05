import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Error from '../../components/Error'

import Collapse from '../../components/Collapse'
import Carrousel from '../../components/Carrousel'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'

import styles from '../../styles/house.module.css'

function House() {
  const [error, setError] = useState(false)
  const [isDataLoading, setDataLoading] = useState(false)
  const [houseTarget, setHouseTarget] = useState([])

  const { id } = useParams()

  useEffect(() => {
    async function fetchHouse() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:3000/datas.json`)
        const houseTarget = await response.json()

        setHouseTarget(houseTarget.filter((profile) => profile.id === id))
      } catch (err) {
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchHouse()
  }, [id])

  if (error === true) {
    console.log('Erreur 404')
    return <Error />
  }

  if (houseTarget[0]?.id !== id && isDataLoading === false) {
    return <Error />
  } else {
    return (
      <section>
        {isDataLoading ? (
          <p>Chargement des Données</p>
        ) : (
          <div className={styles.globalPage}>
            <Carrousel pictures={houseTarget[0].pictures} />

            <div className={styles.split}>
              <div className={styles.locationGeneral}>
                <h1>{houseTarget[0].title}</h1>
                <p className={styles.locationGeneralText}>
                  {houseTarget[0].location}
                </p>
                <Tags text={houseTarget[0].tags} />
              </div>

              <div className={styles.locationProfile}>
                <div className={styles.locationHost}>
                  <h2>{houseTarget[0].host.name}</h2>
                  <img
                    src={houseTarget[0].host.picture}
                    alt="Photographie de l'hôte"
                  ></img>
                </div>
                <div className={styles.rating}>
                  <Rating rate={houseTarget[0].rating} />
                </div>
              </div>
            </div>

            <div className={styles.doubleCollapse}>
              <Collapse
                title={'Description'}
                text={houseTarget[0].description}
              />
              <Collapse
                title={'Equipements'}
                text={houseTarget[0].equipments}
              />
            </div>
          </div>
        )}
      </section>
    )
  }
}

export default House
