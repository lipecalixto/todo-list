import { Trash, Check } from 'phosphor-react'

import styles from './Task.module.css'

interface Props {
  name: string
  fineshed: boolean
}

export function Task({ name }: Props) {
  return (
    <>
      <div className={styles.container}>
        <span>
          <Check size={14} />
        </span>
        <span>{name}</span>
        <span>
          <Trash size={14} />
        </span>
      </div>
    </>
  )
}
