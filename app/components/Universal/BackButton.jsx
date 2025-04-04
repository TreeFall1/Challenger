'use client'
import Image from "next/image";
import styles from "@/app/[locale]/games/page.module.scss";

export const BackButton = ()=>{
  return(
      <Image onClick={e=>{history.back()}} className={styles['back']} src={'/back.svg'} alt={'Back'} width={24} height={24} />
  )
}