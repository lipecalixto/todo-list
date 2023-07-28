import styles from './TaskList.module.css'
import addButton from '../assets/plus.svg'

export function TaskList() {
  return (
    <section className={styles.section}>
      <header>
        <form className={styles.newTaskForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar <img src={addButton} alt="Adicionar tarefa" />
          </button>
        </form>
      </header>
    </section>
  )
}
