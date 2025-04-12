import styles from './page.module.scss'
import {TeamComponent} from "@/app/components/TeamComponent/TeamComponent";
import {getTeams, teams} from "@/app/tools/generator";
import {cardsData, tournamentsList} from "@/app/tools/tools";
import initTranslations from "@/app/i18n";


export default async function TeamsPage(props){
  const params = props.params;

  const locale = (await params).locale;
  const namespaces = ['tournaments', 'components'];
  const { resources } = await initTranslations(locale, namespaces);
  const {t} = await initTranslations(locale, namespaces);

  const { game, tournamentId } = await params;
  const tournamentData = tournamentsList[game][tournamentId];
  const tournamentTeams = (teams[game].find(el=>el.tournament === tournamentData.title)).teams;
  const teamSize = Number(tournamentData.info.split('•')[2].split('v')[0]);


  return(
      <div className={styles['page-container']}>
        <h2 className={styles['page-title']}>{t("teams-page-title")}</h2>
        <p className={styles['page-subtitle']}>{t("teams-page-subtitle")}</p>
        <div className={styles['teams-container']}>
          <h2 className={styles['subtitle']}>{t('ready-title')}</h2>
          {tournamentTeams.map((el, id) => {
            if (el.players.length === teamSize) {
              return (
                  <TeamComponent {...el} key={id} id={id} tournamentId={tournamentId} game={game}/>
              )
            }
          })}
          <h2 className={styles['subtitle']}>{t('waiting-title')}</h2>

          {tournamentTeams.map((el, id) => {
            if (el.players.length !== teamSize) {
              return (
                  <TeamComponent {...el} key={id} id={id} tournamentId={tournamentId} game={game}/>
              )
            }
          })}
        </div>
      </div>
  )
}