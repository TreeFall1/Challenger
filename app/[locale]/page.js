'use client'
import Image from "next/image";
import styles from './page.module.scss'
import {TournamentCard} from "@/app/components/TournamentCard/TournamentCard";
import {cardsData, favTournaments} from "@/app/tools/tools";
import Link from "next/link";
import {GameCard} from "@/app/components/GameCard/GameCard";
import {useTranslation} from "react-i18next";


export default function Home() {
  const {t} = useTranslation('home');
  const games = ['cs', 'dota', 'pubg'];

  // noinspection JSAnnotator
  return (
      <main>
        <div className={styles['banner-container']}>
          <div className={styles['title']}>
            <Image src={'/main-title.webp'} alt={'title'} width={600} height={100} />
            <p>{t('hero-title')}</p>
            <Link href={'/games/pubg'}>
              <button className="accent">{t('hero-btn')}</button>
            </Link>
          </div>
          <Image className={styles['banner']} src={`/main-banner.webp`} alt={'banner'} width={2400}
                 height={600}/>
          <div className={styles['gradient']}></div>
        </div>
        <div className={styles['content']}>
          <h2>{t('tournaments-title')}</h2>
          <div className={styles['tournaments-container']}>
            {favTournaments.map((el, id)=>{
              return (
                  <TournamentCard {...el} type={'big'} game={games[id]} id={id} key={id} />
              )
            })}
          </div>
          <a href={'https://www.kinguin.net/ingame-goods/?r=6749860ddbc36&utm_source=Affiliate&utm_medium=ChM_HPbanner'}>
            <Image className={styles['ad-banner']} src={'/ad-banner.png'} alt={'Kinguin'} width={1136} height={900} />
          </a>
          <h2>{t('games-title')}</h2>
          <div className={styles['games-container']}>
            {cardsData.map((el, id)=>{
              return (
                  <GameCard key={id} {...el} />
              )
            })}
          </div>
        </div>
      </main>
  )
}
