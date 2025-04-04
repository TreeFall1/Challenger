import styles from './page.module.scss'
import {cardsData, ratingList} from "@/app/tools/tools";
import Image from "next/image";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/TranslationProvider";


export default async function RatingPage(props){
  const params = props.params;
  const { game } = await params;
  const gameData = cardsData.find(el=> el.href === game);
  const list = ratingList[game];

  const locale = (await params).locale;
  const namespaces = ['game', 'components'];
  const { resources } = await initTranslations(locale, namespaces);
  const {t} = await initTranslations(locale, namespaces);

  return(
      <TranslationsProvider namespaces={namespaces} locale={locale} resources={resources}>
      <div className={styles['page-container']}>
        <h1>{gameData.title} {t('rating-title')}</h1>
        <div className={styles['subtitle']}><Image src={'/bolt.svg'} alt={'New entry'} width={12} height={12} />{t('rating-subtitle')}</div>
        <table className={styles['table']}>
          <thead>
            <tr>
              <th>#</th>
              <th>{t('table-user')}</th>
              <th>{t('table-played')}</th>
              <th>{t('table-winrate')}</th>
              <th>{t('table-rating')}</th>
            </tr>
          </thead>
          <tbody>
          {list && list.map((el, id)=>{
            return(
                <RatingElement key={id} {...el} game={game} id={id} />
            )
          })}
          </tbody>
        </table>
      </div>
      </TranslationsProvider>
  )
}

const RatingElement = (props)=>{
  const {
    username,
    rating,
    played,
    winrate,
    game,
    id
  } = props;
  return (
      <tr>
        <td>{id+1}</td>
        <td><span><Image src={`/avatars/${game}/${id+1}.webp`} alt="Avatar" width={48} height={48}/> {username} <span className={styles["tier"]}>TIER VI</span></span></td>
        <td><div className={styles['sub']}>{played}</div></td>
        <td><div className={styles['sub']}>{winrate}%</div></td>
        <td><strong>{rating}</strong></td>
      </tr>
  )
}