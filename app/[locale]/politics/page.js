'use client'
import styles from './page.module.scss'
import {useTranslation} from "react-i18next";


export default function PoliticsPage(){
  const {t} = useTranslation('politics');

  return(
      <main className={styles['main']}>
        <h1>{t("privacyPolicy.title")}</h1>

        <p>{t("privacyPolicy.intro", {domain: "AimKills"})}</p>

        <h2>{t("privacyPolicy.dataCollectedTitle")}</h2>
        <ul>
          {t("privacyPolicy.dataCollected.fields", {returnObjects: true}).map((item, index) => (
              <li key={`field-${index}`}>{item}</li>
          ))}
        </ul>
        <ul>
          {t("privacyPolicy.dataCollected.uses", {returnObjects: true}).map((item, index) => (
              <li key={`use-${index}`}>{item}</li>
          ))}
        </ul>

        <h2>{t("privacyPolicy.legalBasis.title")}</h2>
        <ul>
          {t("privacyPolicy.legalBasis.items", {returnObjects: true}).map((item, index) => (
              <li key={`legal-${index}`}>{item}</li>
          ))}
        </ul>

        <h2>{t("privacyPolicy.userRights.title")}</h2>
        <ul>
          {t("privacyPolicy.userRights.items", {returnObjects: true}).map((item, index) => (
              <li key={`right-${index}`}>{item}</li>
          ))}
        </ul>

        <h2>{t("privacyPolicy.dataSharing.title")}</h2>
        <ul>
          {t("privacyPolicy.dataSharing.items", {returnObjects: true}).map((item, index) => (
              <li key={`share-${index}`}>{item}</li>
          ))}
        </ul>

        <h1>{t("cookiesPolicy.title")}</h1>

        <h2>{t("cookiesPolicy.whatIs.title")}</h2>
        <p>{t("cookiesPolicy.whatIs.text")}</p>

        <h2>{t("cookiesPolicy.types.title")}</h2>
        <ul>
          <li>{t("cookiesPolicy.types.list.technical")}</li>
          <li>{t("cookiesPolicy.types.list.analytics")}</li>
          <li>{t("cookiesPolicy.types.list.functional")}</li>
        </ul>

        <h2>{t("cookiesPolicy.management.title")}</h2>
        <p>{t("cookiesPolicy.management.text")}</p>
        <p>{t("cookiesPolicy.management.optout")}</p>

        <h2>{t("privacyPolicy.contact.title")}</h2>
        <p>
          {t("privacyPolicy.contact.description")}
          <br/>
          <strong>{t("privacyPolicy.contact.email")}:</strong> support@aim.kills
        </p>
      </main>
  )
}