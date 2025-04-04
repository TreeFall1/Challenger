import {cardsData, tournamentsList} from "@/app/tools/tools";
import styles from './page.module.scss'
import Image from "next/image";
import {TournamentCard} from "@/app/components/TournamentCard/TournamentCard";
import TranslationsProvider from "@/app/components/TranslationProvider";
import initTranslations from "@/app/i18n";


export default async function gamePage(props){
  const params = props.params;
  const { game } = await params;
  const gameData = cardsData.find(el=> el.href === game);
  const list = tournamentsList[game];

  const locale = (await params).locale;
  const namespaces = ['game', 'components'];
  const { resources } = await initTranslations(locale, namespaces);
  const {t} = await initTranslations(locale, namespaces);

  return(
      <TranslationsProvider namespaces={namespaces} locale={locale} resources={resources}>
        <div className={styles['page-container']}>
          <h1>{t('rec-tournaments')}</h1>
          <div className={styles['rec-list']}>
            {list.slice(0, 4).map((el, id)=>{
              return(
                <TournamentCard key={id} {...el} id={id} game={game} type={id === 0 ? 'main' : 'big'} />
              )
            })}
          </div>
        </div>
      </TranslationsProvider>
  )
}