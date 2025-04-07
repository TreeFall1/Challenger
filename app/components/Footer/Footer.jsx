import styles from './Footer.module.scss'
import Link from "next/link";
import Image from "next/image";


export const Footer = ()=>{
  return (
      <footer className={styles['footer']}>
        {/*<Image src={'/logo-new.png'} alt={'Aimkills'} width={120} height={60} />*/}
        <div className={styles['link']}>
          <Link href={'/contacts'}>Contacts</Link>
          <Link href={'/politics'}>Privacy Policy</Link>
          <p>Aimkills. All rights received ©</p>
        </div>
      </footer>
  )
}