import styles from './page.module.scss'
import Image from "next/image";
import {cardsData, tournamentsList} from "@/app/tools/tools";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/TranslationProvider";


export default async function MatchesPage(props){
  const params = props.params;

  const locale = (await params).locale;
  const namespaces = ['tournaments', 'components'];
  const { resources } = await initTranslations(locale, namespaces);
  const {t} = await initTranslations(locale, namespaces);

  const { game, tournamentId } = await params;
  const tournamentData = tournamentsList[game][tournamentId];
  const slots = Number(tournamentData.info.split('•')[tournamentData.info.split('•').length - 1].split(' ')[1]);

  return(
      <TranslationsProvider namespaces={namespaces} locale={locale} resources={resources}>
      <div className={styles['page-container']}>
        <table>
          <thead>
          <tr>
            <th>{slots-1} {t('matches-title')}</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {[...Array(slots-1)].map((_, id)=>{
            return(
                <MatchElement t={t} key={id} id={id} />
            )
          })}
          </tbody>
        </table>
      </div>
      </TranslationsProvider>
  )
}

const MatchElement = (props)=>{
  const {id} = props;
  const {t} = props;

  return (
      <tr>
        <td className={styles['title']}>
          <h4>{t('match-title')} {id+1}</h4>
          <p>{t('match-subtitle')}</p>
          <div className={styles['badge']}>{t('match-status')}</div>
        </td>
        <td className={styles['teams']}>
          <div>
            <span className={styles['points']}>0</span>
            <p>{t('prizes-status')}</p>
          </div>
          <div>
            <span className={styles['points']}>0</span>
            <p>{t('prizes-status')}</p>
          </div>
        </td>
        <td></td>
      </tr>
  )
}