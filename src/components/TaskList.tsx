import styles from './TaskList.module.css'
import addButton from '../assets/plus.svg'
import empty from '../assets/emptyList.svg'
import { Task } from './Task'
import { useState, FormEvent, ChangeEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Task {
  id: string
  name: string
  finished: boolean
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])

  const [taskName, setTaskName] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: uuidv4(),
      name: taskName,
      finished: false,
    }
    setTasks([newTask, ...tasks])
    setTaskName('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTaskName(event.target.value)
  }

  function deleteTask(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  function updateFinishedTask(id: string, finished: boolean) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, finished } : task,
    )

    setTasks(updatedTasks)
  }

  return (
    <section className={styles.section}>
      <header>
        <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            value={taskName}
          />
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
                  <Task
                    id={id}
                    name={name}
                    finished={finished}
                    onDeleteTask={deleteTask}
                    onUpdateFinishedTask={updateFinishedTask}
                  />
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
