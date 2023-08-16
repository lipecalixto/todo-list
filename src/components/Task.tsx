import styles from './Task.module.css'

interface Props {
  name: string
  fineshed: boolean
}

export function Task({ name }: Props) {
  return <p>{name}</p>
}
