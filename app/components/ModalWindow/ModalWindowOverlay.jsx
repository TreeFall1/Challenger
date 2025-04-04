'use client'
import styles from './ModalWindowOverlay.module.scss';
import Image from "next/image";


export const ModalWindowOverlay = (props) => {
  return (
    <div className={styles['overlay']} onClick={props.onClose}>
      <div style={props.customStyles ?? {boxSizing: 'border-box'}} className={styles['container']} onClick={e=>(e.stopPropagation())}>
        <Image className={styles['close']} src={'/close.svg'} alt={'Close window'} width={20} height={20} onClick={props.onClose}/>
        <div className={styles['main']}>
          <h1>{props.title}</h1>
          {props.children}
        </div>
      </div>
    </div>
  )
}