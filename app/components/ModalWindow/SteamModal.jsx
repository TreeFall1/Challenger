'use client'
import styles from '../Universal/universal.module.scss'
import {ModalWindowOverlay} from "@/app/components/ModalWindow/ModalWindowOverlay";
import Image from "next/image";
import {useTranslation} from "react-i18next";


export const SteamModal = (props)=>{
  const {t} = useTranslation('components');

  return(
      <ModalWindowOverlay onClose={props.onClose}>
        <div className={styles['connect-modal']}>
          <div className={styles['images']}>
            <Image src={'/user.svg'} alt={'icon'} width={72} height={72} />
            <Image src={'/chain.svg'} alt={'connect'} width={20} height={20} />
            <Image src={'/steam.svg'} alt={'steam'} width={72} height={72} />
          </div>
          <h2>{t('steam-title')}</h2>
          <p>{t('steam-subtitle')}</p>
          <a href={'https://aimkills.team'}>
            <button className={`green ${styles['btn']}`}>{t('steam-btn')}</button>
          </a>
        </div>
      </ModalWindowOverlay>
  )
}