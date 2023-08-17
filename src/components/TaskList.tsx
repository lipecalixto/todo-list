import styles from './TaskList.module.css'
import addButton from '../assets/plus.svg'
import empty from '../assets/emptyList.svg'
import { Task } from './Task'

export function TaskList() {
  const tasks = [
    {
      id: '1',
      name: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      finished: false,
    },
    {
      id: '2',
      name: 'task 2',
      finished: false,
    },
    {
      id: '3',
      name: 'task 3',
      finished: true,
    },
  ]

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
      <main>
        <div className={styles.taskInfo}>
          <span className={styles.taskCreated}>
            Tarefas Criadas <span className={styles.taskInfoCount}> 0 </span>
          </span>
          <span className={styles.taskCompleted}>
            Concluídas <span className={styles.taskInfoCount}> 0 </span>
          </span>
        </div>

        {tasks.length ? (
          <section className={styles.listTasks}>
            <ul>
              {tasks.map(({ id, name, finished }) => (
                <li key={id}>
                  <Task name={name} finished={finished} />
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <section className={styles.emptyTasks}>
            <img src={empty} alt="todo vazio" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </section>
        )}
      </main>
    </section>
  )
}
