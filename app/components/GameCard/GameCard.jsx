import styles from './GameCard.module.scss'
import Image from "next/image";
import Link from "next/link";


export const GameCard = (props) => {
  return (
    <Link href={`/games/${props.href}`} className={styles['card']}>
      <Image src={props.img} alt={props.title} width={400} height={800} />
      <h3>{props.title}</h3>
    </Link>
  )
}