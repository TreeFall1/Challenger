'use client'
import styles from './Header.module.scss'
import Image from 'next/image'
import Link from "next/link";
import {ModalWindowOverlay} from "@/app/components/ModalWindow/ModalWindowOverlay";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {getCookie, getNormalizedPathname} from "@/app/tools/tools";
import LanguageChanger from "@/app/components/LanguageChanger";
import {useTranslation} from "react-i18next";


export const Header = ()=>{
  const {t} = useTranslation('components')
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const pathname = usePathname();
  const normalizedPath = getNormalizedPathname(pathname);
  const [isMenuShown, setIsMenuShown] = useState(false);

  const navStyles = {
    current: {color: "#fff", borderBottom: '2px solid var(--accent)'},
    off: {color: 'var(--light-gray)'}
  }

  const menuHandler = ()=>{
    if(!isMenuShown){
      document.querySelector('aside').style.display = 'block';
      document.getElementById('menu').style.display = 'block';
      setIsMenuShown(true);
    } else{
      document.querySelector('aside').style.display = 'none';
      document.getElementById('menu').style.display = 'none';
      setIsMenuShown(false);
    }
  }

  const closeMenu = ()=>{
    document.querySelector('aside').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    setIsMenuShown(false);
  }

  useEffect(()=>{
    getUsername();
  }, [])

  useEffect(() => {
    if(pathname && window.innerWidth < 1025){
      closeMenu();
    }
  }, [pathname]);

  useEffect(() => {
    if(username){
      const isLogged = localStorage.getItem('isLogged');
      if(isLogged){
        setIsLoggedIn(true);
      }
    } else{

    }
  }, [username]);

  const regModalHandler = () => {
    setIsRegModalOpen(!isRegModalOpen);
  }

  const loginModalHandler = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  }

  const register = (e)=>{
    e.preventDefault();
    document.cookie = `username=${document.getElementById("username").value}; path=/; expires=${getDate(false)}`;
    document.cookie = `email=${document.getElementById("email").value}; path=/; expires=${getDate(false)}`;
    document.cookie = `password=${document.getElementById("password").value}; path=/; expires=${getDate(false)}`;
    document.cookie = `regTime=${encodeURIComponent(getDate())}; path=/; expires=${getDate(false)}`;
    regModalHandler();
    setIsLoggedIn(true);
    setUsername(document.getElementById("username").value);
    localStorage.setItem('isLogged', 'true');
    router.push('/profile');
  }

  const getUsername = ()=>{
    setUsername(getCookie('username') ?? null);
  }

  const getDate = (isNow = true)=>{
    let date = new Date(Date.now() + (isNow ? 0 : 86400e3));
    return date.toUTCString();
  }

  return (
      <header style={{height: isLoggedIn ? '90px' : '56px'}} className={styles['header']}>
        {isLoggedIn && (
          <Link href={'/profile'} className={styles['warning']}>
            <Image src={'/warning.svg'} alt={'warning'} width={20} height={20} /> {t('header-warning')}
          </Link>
          )
        }
        <div className={styles['container']}>
          <div className={styles['l-container']}>
            <div className={styles['main']}>
              <Link href={'/'}>
                <Image className={styles['logo']} src={'/logo.svg'} alt="logo" width={28} height={18}/>
              </Link>
              <ul>
                <li style={normalizedPath === '/games' ? navStyles.current : navStyles.off}><Link href={'/games'}>{t('header-nav-games')}</Link>
                </li>
                <li style={normalizedPath === '/spaces' ? navStyles.current : navStyles.off}><Link
                    href={'/spaces'}>{t('header-nav-spaces')}</Link></li>
                <li style={normalizedPath === '/search' ? navStyles.current : navStyles.off}><Link
                    href={'/games'}>{t('header-search')}</Link></li>
              </ul>
            </div>
            <input className={styles['search']} placeholder={`${t('header-search')}...`} type="search"/>
            <div className={styles['user-container']}>
              <LanguageChanger />
              {isLoggedIn ? (
                  <Link href={'/profile'} className={styles['profile']}>
                    <Image src={'/user.svg'} alt={'profile'} width={20} height={20}/>
                    <p>{username}</p>
                  </Link>
              ) : (
                  <>
                    <button onClick={loginModalHandler}>{t('header-login-btn')}</button>
                    <button onClick={regModalHandler} className={'white'}>{t('header-signup-btn')}</button>
                  </>
              )}
            </div>
          </div>
          <div className={styles['s-container']}>
            <ul>
              <li onClick={closeMenu}>
                <Link href={'/'}>
                <Image src={'/home.svg'} height={24} width={24} alt={'Home page'}/>
                  {t('menu-home')}
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Image src={'/notification.svg'} height={24} width={24} alt={'Notifications'}/>
                {t('menu-notifications')}
              </li>
              <li onClick={closeMenu}>
                <Image src={'/chats.svg'} height={24} width={24} alt={'Chats'}/>
                {t('menu-chats')}
              </li>
              <li>
                <Image onClick={menuHandler} src={'/menu.svg'} height={24} width={24} alt={'Menu'}/>
                {t('menu')}
              </li>
            </ul>
            <div id={'menu'} className={styles['menu-container']}>
              <h2>{t('menu')}</h2>
              <div className={styles['menu-el']}>
                <Link onClick={closeMenu} href={'/games'}><Image src={'/controller.svg'} alt={'Games'} width={24}
                                                                 height={24}/> {t('header-nav-games')}</Link>
              </div>
              <div className={styles['menu-el']}>
                <Link onClick={closeMenu} href={'/spaces'}><Image src={'/rocket.svg'} alt={'Spaces'} width={24}
                                                                  height={24}/> {t('header-nav-spaces')}</Link>
              </div>
              {(typeof isLoggedIn !== 'undefined' && isLoggedIn) ? (
                  <div className={styles['menu-el']}>
                    <Link onClick={closeMenu} href={'/profile'}><Image src={'/user-menu.svg'} alt={'Profile'} width={24}
                                                                       height={24}/> {t('menu-profile')}</Link>
                  </div>
              ) : (
                  <div className={styles['menu-btns']}>
                    <button onClick={loginModalHandler}>{t('header-login-btn')}</button>
                    <button onClick={regModalHandler} className={'white'}>{t('header-signup-btn')}</button>
                  </div>
              )}
              <LanguageChanger />
            </div>
          </div>
        </div>
        {
            isRegModalOpen && (
                <div className={styles['modal-container']}>
                  <ModalWindowOverlay onClose={regModalHandler} title={t('log-reg')}>
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
        }
        {isLoginModalOpen && (
            <div className={styles['modal-container']}>
              <ModalWindowOverlay onClose={loginModalHandler} title={t('reg-login')}>
                <p className={styles['subtitle']}>{t('log-title')} <span onClick={e => {
                  loginModalHandler();
                  regModalHandler()
                }}>{t('log-reg')}</span></p>
                <form>
                  <label htmlFor="email">{t('reg-email')}</label>
                  <input required type="email" placeholder={'Email'} id={'email'}/>
                  <label htmlFor="password">{t('reg-password')}</label>
                  <input required type="password" placeholder={'Password'} id={'password'}/>
                  <button className={'accent'}>{t('reg-login')}</button>
                </form>
              </ModalWindowOverlay>
            </div>
        )
        }
      </header>
  )
}
