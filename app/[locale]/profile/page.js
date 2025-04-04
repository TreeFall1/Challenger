'use client'
import styles from './page.module.scss'
import Image from "next/image";
import {SVGIcons} from "@/app/components/Universal/SVGIcons";
import {useEffect, useState} from "react";
import {getCookie} from "@/app/tools/tools";
import {ModalWindowOverlay} from "@/app/components/ModalWindow/ModalWindowOverlay";
import {SteamModal} from "@/app/components/ModalWindow/SteamModal";
import {useTranslation} from "react-i18next";


export default function ProfilePage(){
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSteamModalOpen, setIsSteamModalOpen] = useState(false);
  const {t} = useTranslation('profile');


  useEffect(()=>{
    updateUserdata();
  }, []);

  const updateUserdata = ()=>{
    setUserData({
      username: getCookie('username'),
      regTime: decodeURIComponent(getCookie('regTime')),
      fullname: getCookie('fullname'),
      telegram: getCookie('telegram'),
      remail: getCookie('r-email'),
    })
  }

  const getDate = (isNow = true)=>{
    let date = new Date(Date.now() + (isNow ? 0 : 86400e3));
    return date.toUTCString();
  }

  function timeDifference(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000); // Разница в секундах

    if (diffInSeconds < 60) {
      return `${diffInSeconds} second${diffInSeconds === 1 ? '' : 's'}`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'}`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? '' : 's'}`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
      return `${diffInDays} day${diffInDays === 1 ? '' : 's'}`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return `${diffInMonths} month${diffInMonths === 1 ? '' : 's'}`;
    }

    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} year${diffInYears === 1 ? '' : 's'}`;
  }

  const modalHandler = ()=>{
    setIsModalOpen(!isModalOpen);
  }

  const steamModalHandler = ()=>{
    setIsSteamModalOpen(!isSteamModalOpen);
  }

  const formHandler = (e)=>{
    e.preventDefault();
    modalHandler();
    document.cookie = `fullname=${document.getElementById("fullname").value}; path=/; expires=${getDate(false)}`;
    document.cookie = `telegram=${document.getElementById("telegram").value}; path=/; expires=${getDate(false)}`;
    document.cookie = `r-email=${document.getElementById("r-email").value}; path=/; expires=${getDate(false)}`;
    updateUserdata();
  }


  return(
      <main>
        <div className={styles['banner']}></div>
        <div className={styles['user-container']}>
          <div className={styles['img-container']}>
            <Image src={'/user.svg'} alt={'User image'} width={100} height={100}/>
          </div>
          <p className={styles['role']}>{t('role')}</p>
          <h1 className={styles['username']}>{userData?.username}</h1>
          <div className={styles['status-container']}>
            <div className={styles['icon']}></div>
            <p>{t('status')}&nbsp; • &nbsp;{t('reg-1')} {timeDifference(userData?.regTime)} {t('reg-2')}</p>
          </div>
          <div className={styles['stats-container']}>
            <div className={styles['stat-block']}>
              <SVGIcons icon={'play'}/>
              <div className={styles['data']}>
                <h3>0</h3>
                <p>{t('played')}</p>
              </div>
            </div>
            <div className={styles['stat-block']}>
              <SVGIcons icon={'cup'}/>
              <div className={styles['data']}>
                <h3>0%</h3>
                <p>{t('winrate')}</p>
              </div>
            </div>
            <div className={styles['stat-block']}>
              <SVGIcons icon={'crown'}/>
              <div className={styles['data']}>
                <h3>0</h3>
                <p>{t('reputation')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['user-data']}>
          {!userData?.telegram && !userData?.fullname && !userData?.remail && (
              <>
                <h2>{t('info-title')}</h2>
                <p>{t('info-subtitle')}</p>
              </>
          )}
          <div style={{gridTemplateColumns: `repeat(${!!userData?.telegram + !!userData?.fullname + !!userData?.remail}, 1fr)`}} className={styles['userdata-info']}>
            {userData?.fullname && (
                <div className={styles['userdata-container']}>
                  <h3 className={styles['userdata-title']}>{t('info-fullname')}</h3>
                  <p className={styles['userdata-text']}>{userData.fullname}</p>
                </div>
            )}
            {userData?.telegram && (
                <div className={styles['userdata-container']}>
                  <h3 className={styles['userdata-title']}>Telegram</h3>
                  <p className={styles['userdata-text']}>{userData.telegram}</p>
                </div>
            )}
            {userData?.remail && (
                <div className={styles['userdata-container']}>
                  <h3 className={styles['userdata-title']}>{t('info-email')}</h3>
                  <p className={styles['userdata-text']}>{userData.remail}</p>
                </div>
            )}
          </div>
          <button onClick={modalHandler}>{t('edit-btn')}</button>
        </div>
        {isModalOpen && (
            <ModalWindowOverlay customStyles={{padding: '32px'}} onClose={modalHandler}>
              {isSteamModalOpen ? (<SteamModal onClose={steamModalHandler} />) : (
                <form className={styles['modal-container']} onSubmit={formHandler}>
                  <h2>{t('modal-title')}</h2>
                  <label htmlFor="fullname">{t('info-fullname')}</label>
                  <input required min={3} id={'fullname'} type="text" placeholder={'Joe Anderson'}/>
                  <label htmlFor="telegram">Telegram</label>
                  <input required min={3} id={'telegram'} type="text" placeholder={'@username'}/>
                  <label htmlFor="r-email">{t('info-email')}</label>
                  <input required min={3} id={'r-email'} type="email" placeholder={'email@mail.com'}/>
                  <button className={'green'} onClick={steamModalHandler}>{t('modal-steam')}</button>
                  <button className={'accent'} type={'submit'}>{t('modal-btn')}</button>
                </form>
              )}
            </ModalWindowOverlay>
        )}
      </main>
  )
}