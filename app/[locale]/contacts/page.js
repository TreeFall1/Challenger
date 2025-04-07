'use client'
import styles from './page.module.scss';
import Image from "next/image";
import {useTranslation} from "react-i18next";


export default function Contact(){
  const {t} = useTranslation('contacts');
  
  return (
      <main className={styles['main']}>
        <div className={styles['header']}>
          <div className={styles['title']}>
            <h1>{t('title')}</h1>
          </div>
          <p>{t('subtitle')}</p>
        </div>
        <form className={styles['form']}>
          <h2 className={styles['form-title']}>{t('formTitle')}</h2>
          <div className={styles['inputs']}>
            <input placeholder={'Your name'} type="text"/>
            <input placeholder={'Your email'} type="text"/>
            <textarea placeholder={'Type your feedback'} />
          </div>
          <div className={styles['buttons']}>
            <button>{t('btn')}</button>
          </div>
          <div className={styles['email-block']}>
            <p>{t('support')}</p>
            <p>support@aim.kills</p>
          </div>
          <div className={styles['divider']}></div>
          <div className={styles['socials']}>
            <h2>{t('socials')}</h2>
            <ul>
              <li><Image src="/discord.svg" alt="socials" width={24} height={24}/></li>
              <li><Image src="/telegram.svg" alt="socials" width={18} height={18}/></li>
              <li><Image src="/instagram.svg" alt="socials" width={24} height={24}/></li>
              <li><Image src="/x.svg" alt="socials" width={24} height={24}/></li>
              <li><Image src="/tiktok.svg" alt="socials" width={24} height={24}/></li>
              <li><Image src="/youtube.svg" alt="socials" width={24} height={24}/></li>
              <li><Image src="/facebook.svg" alt="socials" width={24} height={24}/></li>
              <li><Image src={"/reddit.svg"} alt="socials" width={24} height={24}/></li>
            </ul>
          </div>
        </form>
      </main>
  )
}