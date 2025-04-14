import styles from './page.module.scss'
import Image from "next/image";
import initTranslations from "@/app/i18n";
import {tournamentsList} from "@/app/tools/tools";


export default async function PrizesPage(props){
  const params = props.params;
  const { game, tournamentId } = await params;
  const tournamentData = tournamentsList[game][tournamentId];
  const prize = tournamentData.info.split('•')[3].includes('€') ? tournamentData.info.split('•')[3] : "€100.00";

  const locale = (await params).locale;
  const namespaces = ['tournaments', 'components'];
  const { resources } = await initTranslations(locale, namespaces);
  const {t} = await initTranslations(locale, namespaces);

  function splitPrizes() {
    const total = Number(prize.split("€")[1]);
    const first = Math.floor(total * 0.5);
    const second = Math.floor(total * 0.3);
    const third = total - first - second;

    return [first, second, third];
  }

  return(
      <div className={styles['page-container']}>
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
            <td><span><Image style={{filter: 'var(--filter-gold)'}} src={'/cup.svg'} alt={'cup'} width={18}
                             height={18}/> 1</span></td>
            <td>{t('prizes-status')}</td>
            <td>€{splitPrizes()[0]}.00</td>
          </tr>
          <tr>
            <td><span><Image style={{filter: 'var(--filter-silver)'}} src={'/cup.svg'} alt={'cup'} width={18}
                             height={18}/> 2</span></td>
            <td>{t('prizes-status')}</td>
            <td>€{splitPrizes()[1]}.00</td>
          </tr>
          <tr>
            <td><span><Image style={{filter: 'var(--filter-bronze)'}} src={'/cup.svg'} alt={'cup'} width={18}
                             height={18}/> 3</span></td>
            <td>{t('prizes-status')}</td>
            <td>€{splitPrizes()[2]}.00</td>
          </tr>
          <tr>
            <td><span>T4</span></td>
            <td>{t('prizes-status')}</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td><span>T5</span></td>
            <td>{t('prizes-status')}</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td><span>T6</span></td>
            <td>{t('prizes-status')}</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td><span>T7</span></td>
            <td>{t('prizes-status')}</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td><span>T8</span></td>
            <td>{t('prizes-status')}</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td><span>T9</span></td>
            <td>{t('prizes-status')}</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td><span>T10</span></td>
            <td>{t('prizes-status')}</td>
            <td>&mdash;</td>
          </tr>
          </tbody>
        </table>
      </div>
  )
}