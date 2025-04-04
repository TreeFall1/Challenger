'use client'
import styles from './universal.module.scss'
import {useState} from "react";
import {ModalWindowOverlay} from "@/app/components/ModalWindow/ModalWindowOverlay";
import Image from "next/image";
import {SteamModal} from "@/app/components/ModalWindow/SteamModal";
import {useTranslation} from "react-i18next";


export const AccountButton = (props)=>{
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {t} = useTranslation('components')

  const modalHandler = ()=>{
    setIsModalOpen(!isModalOpen);
  }
  return (
      <>
        <button onClick={modalHandler} className={`accent ${styles['connect-button']}`}>{props.title ?? t('add-btn')}</button>
        {isModalOpen && (
          <SteamModal onClose={modalHandler} />
        )}
      </>
  )
}