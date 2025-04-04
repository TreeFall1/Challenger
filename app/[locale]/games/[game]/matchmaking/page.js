import styles from './matchmaking.module.scss'
import Image from "next/image";
import initTranslations from "@/app/i18n";


export default async function MatchmakingPage({params}){
  const locale = (await params).locale;
  const namespaces = ['game'];
  const {t} = await initTranslations(locale, namespaces);

  return(
      <div className={styles['page-container']}>
        <Image src={'/list.svg'} alt={'Queue'} width={32} height={32} />
        <h1>{t('matchmaking-title')}</h1>
        <p>{t('matchmaking-subtitle')}</p>
      </div>
  )
}