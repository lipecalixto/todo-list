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
        <span>{name}</span>
        <span className={styles.trash}>
          <Trash size={14} />
        </span>
      </div>
    </>
  )
}
