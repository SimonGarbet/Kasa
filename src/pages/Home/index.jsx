import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Card from '../../components/Card'
import Banner from '../../components/Banner'

import styles from '../../styles/home.module.css'
import BannerPicture from '../../assets/oceanpaysage.jpg'

function Home() {
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [houseList, setHouseList] = useState([])

  useEffect(() => {
    async function fetchHouse() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:3000/datas.json`)
        const houseList = await response.json()
        console.log(houseList)
        setHouseList(houseList)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchHouse()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <section className={styles.homePage}>
      <div className={styles.banner}>
        {' '}
        <Banner
          title={'Chez vous, partout et ailleurs'}
          picture={BannerPicture}
        />
      </div>
      {isDataLoading ? (
        <span>Chargement des données</span>
      ) : (
        <div className={styles.sup}>
          <div className={styles.container}>
            {houseList?.map((profile) => (
              <Link to={`/house/${profile.id}`} key={profile.id}>
                <Card
                  key={profile.id}
                  title={profile.title}
                  picture={profile.cover}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
