'use client'
import styles from './universal.module.scss'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {getCookie, getNormalizedPathname} from "@/app/tools/tools";
import {useEffect, useState} from "react";


export const Nav = (props)=>{
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(null);

  const isPathnameValid = (el)=>{
    return Math.abs(pathname.length - el.href.length) < 4 && pathname.includes(el.href);
  }

  const {items} = props;
  const elStyles = {
    active: {color: '#fff', borderBottom: "2px solid var(--accent)"},
    off: {color: "var(--light-gary)"}
  }

  useEffect(() => {
    setIsClient(true)
  }, []);

  return (
      <div className={styles['nav']}>
        <ul>
          {items.map((el) => {
            if (el.title === 'Team') {
              if (isClient && getCookie('currentTeam')) {
                return (
                    <li key={el.title} style={isPathnameValid(el) ? elStyles.active : elStyles.off}>
                      <Link href={el.href}>{el.title}</Link>
                    </li>
                );
              }
            } else {
              return (
                  <li key={el.title} style={isPathnameValid(el) ? elStyles.active : elStyles.off}>
                    <Link href={el.href}>{el.title}</Link>
                  </li>
              );
            }
          })}
        </ul>
      </div>
  )
}