'use client'
import styles from './universal.module.scss'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {getNormalizedPathname} from "@/app/tools/tools";


export const Nav = (props)=>{
  const pathname = usePathname();

  const isPathnameValid = (el)=>{
    return Math.abs(pathname.length - el.href.length) < 4 && pathname.includes(el.href);
  }
  const {items} = props;
  const elStyles = {
    active: {color: '#fff', borderBottom: "2px solid var(--accent)"},
    off: {color: "var(--light-gary)"}
  }

  return(
    <div className={styles['nav']}>
      <ul>
        {items.map(el=>{
          return (
              <li key={el.title} style={isPathnameValid(el) ? elStyles.active : elStyles.off}><Link href={el.href}>{el.title}</Link></li>
          )
        })}
      </ul>
    </div>
  )
}