'use client'
import styles from './TeamComponent.module.scss'
import Image from "next/image";
import {ModalWindowOverlay} from "@/app/components/ModalWindow/ModalWindowOverlay";
import {useState} from "react";
import {cardsData, nicknames, tournamentsList} from "@/app/tools/tools";
import {SteamModal} from "@/app/components/ModalWindow/SteamModal";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/navigation";



export const TeamComponent = (props)=>{
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {game, tournamentId, title, players, isLocked, id, teamSlots} = props;
  const gameData = cardsData.find(el=> el.href === game);
  const tournamentData = tournamentsList[game][tournamentId];
  const teamSize = Number(tournamentData.info.split('•')[2].split('v')[0]);
  const {t} = useTranslation('components');

  const modalHandler = ()=>{
    if(!isLocked){
      setIsModalOpen(!isModalOpen);
    }
  }
  const teamImg = `/tournaments/teams/${tournamentId}/team (${id+1}).webp`;

  return (
      <>
        <div onClick={modalHandler} style={{cursor: isLocked ? "not-allowed" : 'pointer'}} className={styles['team-el']}><Image src={teamImg} alt={'Team image'} width={48}
                                                                         height={48}/>
          <div className={styles['title']}>
            <h4>{title}</h4>
            <p>{t('team-status')}</p>
            {isLocked && (
                <Image className={styles['locked']} src={'/lock.svg'} alt={'Team is locked'} width={16} height={16} />
            )}
          </div>
        </div>
        {isModalOpen && (
            <TeamModal game={game} tournamentId={tournamentId} teamSize={teamSize} teamImg={teamImg} data={players} title={title} onClose={modalHandler}/>
        )}
      </>

  )
}

const TeamModal = (props) => {
  const [activeTab, setActiveTab] = useState('members');
  const { data, title, teamImg, teamSize, game, tournamentId } = props;
  const [isSteamModalOpen, setIsSteamModalOpen] = useState(false);
  const {t} = useTranslation('components');
  const router = useRouter();

  const navStyles = {
    current: {color: "#fff", borderBottom: '2px solid var(--accent)'},
    off: {color: 'var(--light-gray)'}
  }

  const navHandler = (e)=>{
    setActiveTab(e.target.id);
  }

  const getPlayerImg = (player)=>{
    return `/tournaments/players/player (${(nicknames.indexOf(player))+1}).webp`;
  }

  const steamModalHandler = ()=>{
    setIsSteamModalOpen(!isSteamModalOpen);
  }

  const getDate = (isNow = true)=>{
    let date = new Date(Date.now() + (isNow ? 0 : 86400e3));
    return date.toUTCString();
  }

  const joinButton = ()=>{
    document.cookie = `currentTeam=${title}; path=/; expires=${getDate(false)}`;
    router.push(`/tournaments/${game}/${tournamentId}/team`);
  }

  return (
      <>
    <ModalWindowOverlay customStyles={{padding: '16px 32px 32px 32px', width: '618px'}} onClose={props.onClose}>
      {isSteamModalOpen ? (<SteamModal onClose={steamModalHandler} />) : (
          <div className={styles['modal-container']}>
            <div className={styles['info']}>
              <Image src={teamImg} alt={'Team image'} width={112} height={112}/>
              <h1>{title}</h1>
              <p className={styles['status']}>{t('team-status')}</p>
            </div>
            <ul className={styles['nav']}>
              <li onClick={navHandler} id={'members'}
                  style={activeTab === 'members' ? navStyles.current : navStyles.off}>{t('team-members')}
              </li>
              <li onClick={navHandler} id={'matches'}
                  style={activeTab === 'matches' ? navStyles.current : navStyles.off}>{t('team-matches')}
              </li>
            </ul>
            <h2>Lineup</h2>
            <div className={styles['members-container']}>
              {data.map((el, id) => {
                return (
                    <div key={id} className={styles['el']}>
                      <Image src={getPlayerImg(el)} alt={'User img'} width={48} height={48}/>
                      <div className={styles['title']}>
                        <div className={styles['username']}>
                          <h4>{el}</h4>
                          <div className={styles['captain-badge']}>{t('team-captain')}</div>
                        </div>
                        <p>{t('team-status')}</p>
                      </div>
                    </div>
                )
              })}
              {data.length !== teamSize && (
                  <div onClick={joinButton} className={`${styles['el']} ${styles['empty']}`}>
                    <Image src={'/user.svg'} alt={'User img'} width={48} height={48}/>
                    <div className={styles['title']}>
                      <div className={styles['username']}>
                        <h4>{t('team-join')}</h4>
                      </div>
                    </div>
                  </div>
              )}
            </div>
          </div>
      )}
    </ModalWindowOverlay>
      </>
  )
}
