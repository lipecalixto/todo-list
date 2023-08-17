import { Trash, Check } from 'phosphor-react'

import styles from './Task.module.css'

interface Props {
  name: string
  finished: boolean
}

export function Task({ name, finished }: Props) {
  return (
    <>
      <div className={styles.container}>
        <span
          className={
            finished ? styles.labelCheckboxMarked : styles.labelCheckboxUnmarked
          }
        >
          <span className={finished ? '' : styles.checkboxUnmarked}>
            <Check size={14} />
          </span>
        </span>

        <div className={finished ? styles.textMarked : styles.textUnmarked}>
          <p>{name}</p>
        </div>

        <span className={styles.trash}>
          <Trash size={14} />
        </span>
      </div>
    </>
  )
}
