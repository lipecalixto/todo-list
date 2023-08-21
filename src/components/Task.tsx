import { Trash, Check } from 'phosphor-react'

import styles from './Task.module.css'

interface Props {
  name: string
  finished: boolean
  id: string
  onDeleteTask: (id: string) => void
}

export function Task({ id, name, finished, onDeleteTask }: Props) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

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

        <span onClick={handleDeleteTask} className={styles.trash}>
          <Trash size={14} />
        </span>
      </div>
    </>
  )
}
