'use client'
import styles from './page.module.scss'
import {teams} from "@/app/tools/generator";
import {getCookie, nicknames} from "@/app/tools/tools";
import {use, useEffect, useState} from 'react'
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useTranslation} from "react-i18next";


export default function TeamPage (props){
  const [team, setTeam] = useState(null);
  const params = props.params;
  const { game, tournamentId } = use(params);
  const router = useRouter();
  const {t} = useTranslation('tournaments');

  useEffect(() => {
    const game = getCookie('currentGame');
    const tournamentId = getCookie('currentTournament');
    setTeam(teams[game][tournamentId].teams.find(el=> el.title === getCookie('currentTeam')));
  }, []);

  const getPlayerImg = (player)=>{
    return `/tournaments/players/player (${(nicknames.indexOf(player))+1}).webp`;
  }

  const profileFill = ()=>{
    router.push('/profile');
  }

  return (
      <div className={styles['page-container']}>
        <h2>{team?.title}</h2>
        <div className={styles['players-container']}>
          {team?.players.map((el, id) => {
            return (
                <div className={styles['player']} key={id}>
                  <div className={styles['username']}>
                    <Image src={getPlayerImg(el)} alt={'player'} width={48} height={48}/>
                    <p>{el}</p>
                  </div>
                  <div className={styles['status']}>
                    {id === 0 && (
                        <div className={styles['badge']}>{t('captain-badge')}</div>
                    )}
                    <div className={styles['ready']}>{t('player-ready')}</div>
                  </div>
                </div>
            )
          })}
          <div className={styles['player']}>
            <div className={styles['username']}>
              <Image src={'/user.svg'} alt={'player'} width={48} height={48}/>
              <p>YOU</p>
            </div>
            <div className={styles['status']}>
              <button onClick={profileFill} className={styles['not-ready']}>{t('profile-fill')}</button>
            </div>
          </div>
        </div>
      </div>
  )
}