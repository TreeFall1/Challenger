'use client'
import stylesStandard from './TournamentCard.module.scss'
import stylesMain from './main.module.scss'
import stylesBig from './big.module.scss'
import Image from "next/image";
import Link from "next/link";
import {getTimeForTournament, getTournamentTime} from "@/app/tools/tools";
import {useEffect, useState} from "react";


export const TournamentCard = (props)=>{
  const [styles, setStyles] = useState(stylesStandard);
  const {
    title,
    img,
    time,
    info,
    id,
    game
  } = props;

  const minutesUntilStart = id < 2 ? getTournamentTime() : time;
  const startTime = getTimeForTournament();
  const totalTime = id > 1 ? time : `in ${minutesUntilStart} minutes, ${startTime} `

  useEffect(()=>{
    if(props.type === 'main'){
      setStyles(window?.innerWidth < 768 ? stylesBig : stylesMain);
    } else if(props.type === 'big'){
      setStyles(stylesBig);
    } else{
      setStyles(stylesStandard);
    }
  }, [])

  return(
    <Link href={`/tournaments/${game}/${id}`} className={styles['card']}>
      <Image src={`/tournaments/${img}`} alt={'Tournament'} width={600} height={600} />
      <div className={styles['tournament-data']}>
        <p className={styles['time']}>{totalTime}</p>
        <h3>{title}</h3>
        <p className={styles['info']}>{info}</p>
        <div className={styles['badge']}>Open</div>
      </div>
    </Link>
  )
}