'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from "@/app/components/Header/Header.module.scss";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(i18n.language);

  useEffect(() => {
    setCurrentLocale(i18n.language);
  }, [i18n.language]);

  const handleChange = (e) => {
    const newLocale = e.target.innerText.toLowerCase();
    i18n.changeLanguage(newLocale);
    setCurrentLocale(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=2592000`; // 30 дней

    setIsLangMenuOpen(false);
    let newPath;
    if (currentPathname === "/") {
      newPath = `/${newLocale}`;
    } else {
      newPath = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
    }
    router.push(newPath);

    setTimeout(()=>{
      router.refresh()
    }, 100)
  };




  const menuHandler = ()=>{
    setIsLangMenuOpen(!isLangMenuOpen);
  }

  return (
      <button onClick={menuHandler} className={styles['lang']}>
        <span className={styles['current-el']}>
          <Image src={'/planet.svg'} alt={'Change language'} width={24} height={24}/>
          <span>{currentLocale?.toUpperCase()}</span>
        </span>
        {isLangMenuOpen && (
            <div className={styles['dropdown-menu']}>
              {['ru', 'en', 'zh'].map((lang) => (
                  lang !== currentLocale && (
                      <div key={lang} onClick={handleChange} className={styles['el']}>
                        {lang.toUpperCase()}
                      </div>
                  )
              ))}
            </div>
        )}
      </button>
  );
}
