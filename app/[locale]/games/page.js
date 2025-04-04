'use client'
import styles from './page.module.scss'
import {GameCard} from "@/app/components/GameCard/GameCard";
import Image from "next/image";
import {BackButton} from "@/app/components/Universal/BackButton";
import {cardsData, topPlayers} from "@/app/tools/tools";
import {useTranslation} from "react-i18next";


export default function Games(){
  const {t} = useTranslation('sub');

  return(
      <main className={styles['main']}>
        <div className={styles['top-container']}>
          <span className={styles['title']}>{t('top-title')} <Image src={'/crown.svg'} alt={'crown'} width={24} height={24} /></span>
          <div className={styles['players-container']}>
            <table>
              <thead>
              <tr>
                <th>#</th>
                <th>{t('top-user')}</th>
                <th>{t('top-rating')}</th>
              </tr>
              </thead>
              <tbody>
              {topPlayers.map((el, id)=>{
                return (
                    <UserElement {...el} id={id} key={id} />
                )
              })}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles['main-container']}>
          <BackButton/>
          <h1 className={styles['page-title']}>{t('games-title')}</h1>
          <div className={styles['games-container']}>
            {cardsData.map(el=>{
              return (
                  <GameCard key={el.title} {...el} />
              )
            })}
          </div>
        </div>
      </main>
  )
}

const UserElement = (props) => {
  const {id, username, img, rating} = props;
  return (
      <tr>
        <td>{id+1}</td>
        <td><span><Image src={`/avatars${img}`} alt={'avatar'} width={24} height={24}/> {username}</span></td>
        <td>{rating}</td>
      </tr>
  )
}