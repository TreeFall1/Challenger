import styles from './page.module.scss'
import {TournamentCard} from "@/app/components/TournamentCard/TournamentCard";
import {tournamentsList} from "@/app/tools/tools";


export default async function TournamentsPage(props){
  const params = props.params;
  const { game } = await params;
  const list = tournamentsList[game];

  return(
    <div className={styles['page-container']}>
      {list && list.map((el, id)=>{
        return(
            <TournamentCard key={id} {...el} id={id} game={game} />
        )
      })}
    </div>
  )
}