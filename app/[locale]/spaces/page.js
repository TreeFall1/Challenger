'use client'
import styles from './page.module.scss'
import Image from "next/image";
import {spaces} from "@/app/tools/tools";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

export default function SpacesPage(){
  const {t} = useTranslation('sub');

  return(
      <main className={styles['main']}>
        <div className={styles['banner-container']}>
          <Image className={styles['banner']} src={`/spaces-banner.jpg`} alt={'banner'} width={2400}
                 height={600}/>
          <div className={styles['gradient']}></div>
        </div>
        <div className={styles['content']}>
          <h1>{t('spaces-title')}</h1>
          <p className={styles['page-subtitle']}>{t('spaces-subtitle')}</p>
          <h2>{t('featured-spaces')}</h2>
          <div className={styles['main-spaces']}>
            {spaces.main.map((el, id)=>{
              return(
                  <SpaceElement {...el} key={id} />
              )
            })}
          </div>
          <Image className={styles['ad-banner']} src={'/spaces-ad.png'} alt={'advert'} width={1136} height={900} />
          <h2>{t('popular-spaces')}</h2>
          <div className={styles['popular-spaces']}>
            {spaces.popular.map((el, id)=>{
              return(
                  <SpaceElement {...el} isRandom={true} key={id} />
              )
            })}
          </div>
        </div>
      </main>
  )
}

const SpaceElement = (props)=>{
  const {t} = useTranslation('sub');
  const [clientIcons, setClientIcons] = useState(null);


  function getRandomBooleanArray() {
    return [Math.random() < 0.5, Math.random() < 0.5];
  }


  const returnIcons = (random = false)=>{
    if(!random){
      return (
        <>
          <Image src={'/verified.svg'} alt={'verified'} width={14} height={14} />
          <Image src={'/diamond.svg'} alt={'premium'} width={14} height={14} />
        </>
      )
    } else{
      const icons = getRandomBooleanArray();
      return (
          <>
            {icons[0] && <Image src={'/verified.svg'} alt={'verified'} width={14} height={14} />}
            {icons[1] && <Image src={'/diamond.svg'} alt={'premium'} width={14} height={14} />}
          </>
      )
    }
  }
  const {title, img, members, isRandom} = props;


  useEffect(() => {
    setClientIcons(returnIcons(isRandom));
  }, []);

  return(
      <div className={styles['space-el']}>
        <Image className={styles['avatar']} src={`/spaces-${img}`} alt={'Space icon'} width={160} height={160} />
        <span className={styles['title']}>{title} {clientIcons}</span>
        <p>{members} {t('members')}</p>
      </div>
  )
}