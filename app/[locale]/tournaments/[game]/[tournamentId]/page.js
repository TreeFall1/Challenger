import styles from './page.module.scss'
import Image from "next/image";
import {cardsData, getTournamentTime, tournamentsList} from "@/app/tools/tools";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/TranslationProvider";
import {teams} from "@/app/tools/generator";


export default async function TournamentPage(props){
  const params = props.params;

  const locale = (await params).locale;
  const namespaces = ['tournaments', 'components'];
  const { resources } = await initTranslations(locale, namespaces);
  const {t} = await initTranslations(locale, namespaces);

  const { game, tournamentId } = await params;
  const gameData = cardsData.find(el=> el.href === game);
  const tournamentData = tournamentsList[game][tournamentId];
  const tournamentTeams = (teams[game].find(el=>el.tournament === tournamentData.title)).teams;
  const teamSize = tournamentData.info.split('•')[2];
  const slots = tournamentData.info.split('•')[tournamentData.info.split('•').length - 1].split(' ')[1];
  const minutesUntilStart = tournamentId < 2 ? getTournamentTime() : tournamentData.time;
  const prize = tournamentData.info.split('•')[3];
  console.log(prize)

  return (
      <TranslationsProvider namespaces={namespaces} locale={locale} resources={resources}>
      <div className={styles['page-container']}>
        <div className={styles['status-container']}>
          <div className={styles['status-el']}>
            <div className={styles['header']}>
              <div className={styles['circle']}></div>
              <div className={styles['line']}></div>
            </div>
            <div className={styles['title-container']}>
              <h3>{t('status-1-title')} {typeof minutesUntilStart === 'number' && (<span style={{
                color: `var(--light-gray)`,
                fontSize: "16px",
                fontWeight: '600'
              }}>{minutesUntilStart} minutes</span>)}</h3>
              <p>{t('status-1-subtitle')}</p>
            </div>
          </div>
          <div className={styles['status-el']}>
            <div className={styles['header']}>
              <div className={styles['circle']}></div>
              <div className={styles['line']}></div>
            </div>
            <div className={styles['title-container']}>
              <h3>{t('status-2-title')}</h3>
              <p>{t('status-2-subtitle')}</p>
            </div>
          </div>
          <div className={styles['status-el']}>
            <div className={styles['header']}>
              <div className={styles['circle']}></div>
              <div className={styles['line']}></div>
            </div>
            <div className={styles['title-container']}>
              <h3>{t('status-3-title')}</h3>
              <p>{t('status-3-subtitle')}</p>
            </div>
          </div>
          <div className={styles['status-el']}>
            <div className={styles['header']}>
              <div className={styles['circle']}></div>
              <div className={styles['line']}></div>
            </div>
            <div className={styles['title-container']}>
              <h3>{t('status-4-title')}</h3>
              <p>{t('status-4-subtitle')}</p>
            </div>
          </div>
          <div className={styles['status-el']}>
            <div className={styles['header']}>
              <div className={styles['circle']}></div>
            </div>
            <div className={styles['title-container']}>
              <h3>{t('status-5-title')}</h3>
              <p>{t('status-5-subtitle')}</p>
            </div>
          </div>
        </div>
        <div className={styles['main-container']}>
          <div className={styles['info-container']}>
            <h2>{t('format-title')}</h2>
            <div className={styles['format']}>
              <div className={styles['el']}>
                <Image src={`/${game}-icon.${game === 'cs' ? 'webp' : 'svg'}`} alt={'Game'} width={32} height={32}/>
                <h3>{t('format-game')}</h3>
                <p>{gameData.title}</p>
              </div>
              <div className={styles['el']}>
                <Image src={`/calendar.svg`} alt={'check in'} width={32} height={32}/>
                <h3>{t('format-checkin')}</h3>
                <p>{t('format-checkin-val')}</p>
              </div>
              <div className={styles['el']}>
                <Image src={`/users.svg`} alt={'Teams'} width={32} height={32}/>
                <h3>{t('format-teams')}</h3>
                <p>{teamSize}</p>
              </div>
              <div className={styles['el']}>
                <Image src={`/crown.svg`} alt={'Entry'} width={32} height={32}/>
                <h3>{t('format-req')}</h3>
                <p>{t('format-req-val')}</p>
              </div>
              <div className={styles['el']}>
                <Image src={`/cup.svg`} alt={'Cup'} width={32} height={32}/>
                <h3>{t('format-prize')}</h3>
                <p>{prize && prize.includes('€') ? prize : "€100.00"}</p>
              </div>
              <div className={styles['el']}>
                <Image src={`/format.svg`} alt={'format'} width={32} height={32}/>
                <h3>{t('format-title')}</h3>
                <p>{t('format-val')}</p>
              </div>
            </div>
            <div className={styles['info-el']}>
              <div className={styles['el']}>
                <h2>{t('info-title')}</h2>
                <h3>{t('info-subtitle')} {teamSize}</h3>
                <p>{t('info-text')}</p>
              </div>
              <div className={styles['el']}>
                <h3>{t('format-title')}</h3>
                <ul>
                  <li>{t('rule-1')}</li>
                  <li>{t('rule-2')}</li>
                  <li>{t('rule-3')}</li>
                </ul>
              </div>
              <div className={styles['el']}>
                <h3>{t('reports-title')}</h3>
                <p>{t('reports-text-1')}</p>
                <p>{t('reports-text-2')}</p>
              </div>
            </div>
          </div>
          <div className={styles['config-container']}>
            <h2>{t('teams-title')}</h2>
            <div className={styles['teams']}>
              <div className={styles['el']}>
                <h4>{t('teams-reg')}</h4>
                <p>{tournamentTeams?.length}</p>
              </div>
              <div className={styles['el']}>
                <h4>{t('teams-ready')}</h4>
                <p>0</p>
              </div>
              <div className={styles['el']}>
                <h4>{t('teams-slots')}</h4>
                <p>{slots}</p>
              </div>
            </div>
            <h2>{t('prizes')}</h2>
            <div className={styles['prizes']}>
              <table>
                <thead>
                <tr>
                  <th>#</th>
                  <th>{t('prizes-team')}</th>
                  <th>{t('prizes-prize')}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><span><Image style={{filter: 'var(--filter-gold)'}} src={'/cup.svg'} alt={'cup'} width={18} height={18}/> 1</span></td>
                  <td>{t('prizes-status')}</td>
                  <td>€5.00</td>
                </tr>
                <tr>
                  <td><span><Image style={{filter: 'var(--filter-silver)'}} src={'/cup.svg'} alt={'cup'} width={18} height={18}/> 2</span></td>
                  <td>{t('prizes-status')}</td>
                  <td>€3.00</td>
                </tr>
                <tr>
                  <td><span><Image style={{filter: 'var(--filter-bronze)'}} src={'/cup.svg'} alt={'cup'} width={18} height={18}/> 3</span></td>
                  <td>{t('prizes-status')}</td>
                  <td>€2.00</td>
                </tr>
                </tbody>
              </table>
            </div>
            <h2>{t('settings-title')}</h2>
            <div className={styles['settings-container']}>
              {game === 'pubg' && (
                  <div style={{backgroundImage: `url('/tournaments/pubg-maps.jpg')`}} className={styles['img']}></div>
              )}
              {game === 'cs' && (
                  <div style={{backgroundImage: `url('/tournaments/cs-maps.jpg')`}} className={styles['img']}></div>
              )}
              <div className={styles['data']}>
              <div className={styles['el']}>
                  <h4>Map pool</h4>
                  <p>Standard pool</p>
                </div>
                <div className={styles['el']}>
                  <h4>Game mode</h4>
                  <p>Standard</p>
                </div>
                <div className={styles['el']}>
                  <h4>Max rounds</h4>
                  <p>Basic preset</p>
                </div>
                <div className={styles['el']}>
                  <h4>Anti-Cheat</h4>
                  <p>Akros Anti-Cheat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </TranslationsProvider>
  )
}
