// noinspection JSAnnotator

'use client'
import styles from './Aside.module.scss'
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {getCookie} from "@/app/tools/tools";


export const Aside = ()=>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [margin, setMargin] = useState('56px');

  useEffect(() => {
    if(getCookie('username')){
      setIsLoggedIn(getCookie('isLogged'));
    } else{
      setIsLoggedIn(false);
    }

    setMargin(window.innerWidth > 1023 ? (isLoggedIn ? '90px' : '56px') : '0px')
  }, []);

  useEffect(() => {
    setMargin(window.innerWidth > 1023 ? (isLoggedIn ? '90px' : '56px') : '0px');
  }, [isLoggedIn]);

  return (
      <aside style={{marginTop: margin}} className={styles['aside']}>
        <div className={styles['container']}>
          <ul>
            <li><Link href={'/games/dota'}><Image src={'/dota-icon.svg'} alt={'Dota 2'} width={40} height={40}/></Link></li>
            <li><Link href={'/games/cs'}><Image src={'/cs-icon.webp'} alt={'CS 2'} width={40} height={40}/></Link></li>
            <li><Link href={'/games/pubg'}><Image src={'/pubg-icon.svg'} alt={'pubg'} width={40} height={40}/></Link></li>
            <li><Link href={'/games/tf'}><Image src={'/tf2-icon.svg'} alt={'Team Fortress 2'} width={40} height={40}/></Link></li>
          </ul>
        </div>
      </aside>
  )
}