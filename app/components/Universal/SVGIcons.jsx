'use client'
import styles from './universal.module.scss'


export const SVGIcons = (props)=>{
  const icon = ()=>{
    switch(props.icon){
      case 'play':
        return (
            <svg className="f--icon-large f--icon-medium--tablet" width="1em" height="1em" viewBox="0 0 24 24"
                 fill="currentColor">
              <path fill="currentColor"
                    d="M18.661 14.386 8.584 20.552A3.01 3.01 0 0 1 4 17.994V6.006a3.01 3.01 0 0 1 4.584-2.558l10.077 6.166a2.8 2.8 0 0 1 0 4.772Z"></path>
            </svg>
        );
      case 'cup':
        return (
            <svg className="f--icon-large f--icon-medium--tablet" width="1em" height="1em" viewBox="0 0 24 24"
                 fill="currentColor">
              <path fill="currentColor"
                    d="M20 4.25h-2.025A1.5 1.5 0 0 0 16.5 3h-9a1.5 1.5 0 0 0-1.475 1.25H4A1.752 1.752 0 0 0 2.25 6v1.65a4.072 4.072 0 0 0 4.1 4.1h.321a6 6 0 0 0 4.579 3.2v3.11Q9 18.408 9 21h6q0-2.6-2.25-2.942v-3.11a6 6 0 0 0 4.579-3.2h.321a4.072 4.072 0 0 0 4.1-4.1V6A1.752 1.752 0 0 0 20 4.25ZM3.75 7.65V6A.25.25 0 0 1 4 5.75h2V9a6.09 6.09 0 0 0 .127 1.231A2.562 2.562 0 0 1 3.75 7.65Zm16.5 0a2.562 2.562 0 0 1-2.377 2.581A6.09 6.09 0 0 0 18 9V5.75h2a.25.25 0 0 1 .25.25Z"></path>
            </svg>
        );
      case 'crown':
        return (
            <svg className="f--icon-large f--icon-medium--tablet" width="1em" height="1em" viewBox="0 0 24 24"
                 fill="currentColor">
              <path fill="currentColor"
                    d="M19.9 19.42a.5.5 0 0 1-.49.58H4.59a.5.5 0 0 1-.49-.58L4.508 17a.3.3 0 0 1 .3-.25H19.2a.3.3 0 0 1 .3.25Zm-.41-11.89-2.5 1.51a.984.984 0 0 1-1.33-.3l-2.839-4.3a.984.984 0 0 0-1.641 0L8.34 8.73a.979.979 0 0 1-1.34.3l-2.49-1.5a.991.991 0 0 0-1.49 1.04l1.447 6.446a.3.3 0 0 0 .293.234h14.48a.3.3 0 0 0 .293-.234L20.98 8.57a.991.991 0 0 0-1.49-1.04Z"></path>
            </svg>
        )

    }
  }

  return (
      <div className={styles['svg-container']}>
        {icon()}
      </div>
  )
}