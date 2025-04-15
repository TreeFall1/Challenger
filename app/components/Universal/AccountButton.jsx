'use client'
import styles from './universal.module.scss'
import {useEffect, useState} from "react";
import {SteamModal} from "@/app/components/ModalWindow/SteamModal";
import {useTranslation} from "react-i18next";
import {getCookie} from "@/app/tools/tools";
import {ModalWindowOverlay} from "@/app/components/ModalWindow/ModalWindowOverlay";
import {useRouter} from "next/navigation";


export const AccountButton = (props)=>{
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const {t} = useTranslation('components');
  const router = useRouter();

  useEffect(() => {
    setIsLogged(getCookie('isLogged'));
  }, []);

  const modalHandler = ()=>{
    setIsModalOpen(!isModalOpen);
  }

  const register = (e)=>{
    const expireDate = getDate(false, document.getElementById("username").value === 'DeS0rCh1k');

    e.preventDefault();
    document.cookie = `username=${document.getElementById("username").value}; path=/; expires=${expireDate}`;
    document.cookie = `email=${document.getElementById("email").value}; path=/; expires=${expireDate}`;
    document.cookie = `password=${document.getElementById("password").value}; path=/; expires=${expireDate}`;
    document.cookie = `regTime=${encodeURIComponent(getDate(true))}; path=/; expires=${expireDate}`;
    modalHandler();
    document.cookie = `isLogged=true; path=/; expires=${expireDate}`;
    router.push('/profile');
  }

  const getDate = (isNow = true, useWeek = false) => {
    let offset = 0;

    if (!isNow) {
      offset = useWeek ? 7 * 86400e3 : 86400e3;
    }

    let date = new Date(Date.now() + offset);
    return date.toUTCString();
  };


  return (
      <>
        <button onClick={modalHandler} className={`accent ${styles['connect-button']}`}>{props.title ?? t('add-btn')}</button>
        {isModalOpen && (
            isLogged ? (
                <SteamModal onClose={modalHandler} />
            ) : (
                <div className={styles['modal-container']}>
                  <ModalWindowOverlay onClose={modalHandler} title={t('log-reg')}>
                    <p className={styles['subtitle']}>{t('reg-title')} <span onClick={e => {
                      regModalHandler();
                      loginModalHandler()
                    }}>{t('reg-login')}</span></p>
                    <form onSubmit={register}>
                      <label htmlFor="username">{t('reg-username')}</label>
                      <input required type="text" placeholder={'Username'} id={'username'}/>
                      <label htmlFor="password">{t('reg-password')}</label>
                      <input required type="password" placeholder={'Password'} id={'password'}/>
                      <label htmlFor="email">{t('reg-email')}</label>
                      <input required type="email" placeholder={'Email'} id={'email'}/>
                      <label>{t('reg-date')}</label>
                      <div className={styles['date-container']}>
                        <input required type="text" max={3000} min={1} placeholder={'Year'}/>
                        <input required type="text" max={12} min={1} placeholder={'Mon'}/>
                        <input required type="text" max={31} min={1} placeholder={'Day'}/>
                      </div>
                      <button className={'accent'}>{t('reg-btn')}</button>
                      <p className={styles['rules']}>{t('reg-rules')}</p>
                    </form>
                  </ModalWindowOverlay>
                </div>
            )
        )}
      </>
  )
}