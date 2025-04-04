import styles from "@/app/[locale]/games/[game]/layout.module.scss";
import Image from "next/image";
import {cardsData} from "@/app/tools/tools";
import {Nav} from "@/app/components/Universal/Nav";
import {AccountButton} from "@/app/components/Universal/AccountButton";
import TranslationsProvider from "@/app/components/TranslationProvider";
import initTranslations from "@/app/i18n";

export default async function gamePageLayout(props) {
  const params = props.params;
  const { game } = await params;
  const gameData = cardsData.find(el=> el.href === game);

  const locale = (await params).locale;
  const namespaces = ['game', 'components'];
  const { resources } = await initTranslations(locale, namespaces);
  const {t} = await initTranslations(locale, namespaces);

  const navItems = [
    {
      title: t('nav-overview'),
      href: `/games/${gameData.href}`
    },
    {
      title: t('nav-tournaments'),
      href: `/games/${gameData.href}/tournaments`
    },
    {
      title: t('nav-matchmaking'),
      href: `/games/${gameData.href}/matchmaking`
    },
    {
      title: t('nav-rating'),
      href: `/games/${gameData.href}/rating`
    },
  ];

  return (
      <TranslationsProvider namespaces={namespaces} locale={locale} resources={resources}>
      <main>
        <div className={styles['banner-container']}>
          <Image className={styles['banner']} src={`/${gameData.href}-banner.webp`} alt={gameData.title} width={2400}
                 height={600}/>
          <div className={styles['gradient']}></div>
        </div>
        <div className={styles['game-info']}>
          <div className={styles['title-container']}>
            <Image src={gameData.img} alt={gameData.title} width={140} height={300}/>
            <h1>{gameData.title}</h1>
          </div>
          <div className={styles['action-buttons']}>
            <button style={{cursor: 'not-allowed'}} className={styles['button']}>{t('create-btn')}</button>
            <AccountButton />
          </div>
        </div>
        <div className={styles['content']}>
          <div className={styles['nav-container']}>
            <Nav items={navItems} />
          </div>
          {props.children}
        </div>
      </main>
      </TranslationsProvider>
  );
}