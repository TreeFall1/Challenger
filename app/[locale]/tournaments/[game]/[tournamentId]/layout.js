import stylesLayout from './layout.module.scss'
import Image from "next/image";
import {AccountButton} from "@/app/components/Universal/AccountButton";
import {Nav} from "@/app/components/Universal/Nav";
import {cardsData, getTimeForTournament, getTournamentTime, tournamentsList} from "@/app/tools/tools";
import TranslationsProvider from "@/app/components/TranslationProvider";
import initTranslations from "@/app/i18n";


export default async function TournamentsPageLayout(props){
  const params = props.params;

  const locale = (await params).locale;
  const namespaces = ['tournaments', 'components'];
  const { resources } = await initTranslations(locale, namespaces);
  const {t} = await initTranslations(locale, namespaces);

  const { game, tournamentId } = await params;
  const gameData = cardsData.find(el=> el.href === game);
  const navItems = [
    {
      title: t('nav-overview'),
      href: `/tournaments/${game}/${tournamentId}`
    },
    {
      title: t('nav-matches'),
      href: `/tournaments/${game}/${tournamentId}/matches`
    },
    {
      title: t('nav-teams'),
      href: `/tournaments/${game}/${tournamentId}/teams`
    },
    {
      title: t('nav-prizes'),
      href: `/tournaments/${game}/${tournamentId}/prizes`
    },
    {
      title: t('prizes-team'),
      href: `/tournaments/${game}/${tournamentId}/team`
    }
  ];
  const tournamentData = tournamentsList[game][tournamentId];
  const tournamentSponsor = tournamentData.info.split('•')[0].split('Hosted by ')[1];
  const tournamentImg = tournamentData.img.split('.')[0]+'-l.'+tournamentData.img.split('.')[1];
  const minutesUntilStart = tournamentId < 2 ? getTournamentTime() : tournamentData.time;
  const startTime = getTimeForTournament();
  const time = tournamentId > 1 ? tournamentData.time : `in ${minutesUntilStart} minutes, ${startTime} `

  return (
      <TranslationsProvider namespaces={namespaces} locale={locale} resources={resources}>
      <main>
        <div className={stylesLayout['banner-container']}>
          <Image className={stylesLayout['banner']} src={`/tournaments/${tournamentImg}`} alt={gameData.title} width={2400}
                 height={600}/>
          <div className={stylesLayout['gradient']}></div>
        </div>
        <div className={stylesLayout['game-info']}>
          <div className={stylesLayout['title-container']}>
            <p className={stylesLayout['sponsor']}>{tournamentSponsor}</p>
            <h1>{tournamentData.title}</h1>
            <p>{time}</p>
            <div className={stylesLayout['badge']}>Open</div>
          </div>
          <div className={stylesLayout['action-buttons']}>
            <AccountButton title={t('join-btn')} />
          </div>
        </div>
        <div className={stylesLayout['content']}>
          <div className={stylesLayout['nav-container']}>
            <Nav game={game} tournamentId={tournamentId} items={navItems}/>
          </div>
          {props.children}
        </div>
      </main>
      </TranslationsProvider>
  )
}